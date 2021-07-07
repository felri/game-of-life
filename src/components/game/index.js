import React, { useState, useCallback, useRef, useEffect } from "react";
import Button from "../btn";
import Size from "../size";
import produce from "immer";
import {
  operations,
  generateEmptyGrid,
  getSavedValue,
  saveValue,
} from "../../utils";

const Game = () => {
  const [running, setRunning] = useState(false);
  const [cols, setCols] = useState(parseInt(getSavedValue(30, "cols")));
  const [rows, setRows] = useState(parseInt(getSavedValue(30, "rows")));
  const oldGrid = getSavedValue(null, "grid");

  const [grid, setGrid] = useState(() => {
    return oldGrid || generateEmptyGrid(rows, cols);
  });

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid((g) => {
      const newGrid = produce(g, (draft) => {
        for (let i = 0; i < rows; i++) {
          for (let k = 0; k < cols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < rows && newK >= 0 && newK < cols) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              draft[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              draft[i][k] = 1;
            }
          }
        }
      });
      return newGrid;
    });

    setTimeout(runSimulation, 100);
  }, [cols, rows]);

  const handleRun = () => {
    setRunning(!running);
    if (!running) {
      runningRef.current = true;
      runSimulation();
    }
  };

  const handleRandom = () => {
    const aux = [];
    for (let i = 0; i < rows; i++) {
      aux.push(Array.from(Array(cols), () => (Math.random() > 0.7 ? 1 : 0)));
    }
    setGrid(aux);
  };

  const handleClean = () => {
    setGrid(generateEmptyGrid(rows, cols));
  };

  const checkSize = (value) => {
    if (parseInt(value) === 0 || isNaN(parseInt(value))) return 1;
    else if (parseInt(value) > 100) return 100;
    return parseInt(value);
  };

  const handleSize = (e, type) => {
    let aux = checkSize(e.target.value);
    let grid = []
    if (type === "cols") {
      grid = generateEmptyGrid(rows, aux)
      setCols(aux);
    } else {
      grid = generateEmptyGrid(aux, cols)
      setRows(aux);
    }
    saveValue(aux, type);
    setRunning(false);
    setGrid(grid);
  };

  useEffect(() => {
    saveValue(grid, 'grid')
  }, [grid])

  return (
    <>
      <div className="container-btns">
        <div className="container-btns">
          <Size label="rows" onChange={handleSize} value={rows} />
          <Size label="cols" onChange={handleSize} value={cols} />
        </div>
        <div className="container-btns">
          <Button onClick={handleRun}>{running ? "stop" : "start"}</Button>
          <Button onClick={handleRandom}>random</Button>
          <Button onClick={handleClean}>clear</Button>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 10px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, (draft) => {
                  draft[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 10,
                height: 10,
                backgroundColor: grid[i][k] ? "white" : undefined,
                border: "solid 1px white",
              }}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Game;
