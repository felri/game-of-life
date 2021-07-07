
export const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

export const generateEmptyGrid = (rows, cols) => {
  const aux = [];
  for (let i = 0; i < rows; i++) {
    aux.push(Array.from(Array(cols), () => 0));
  }
  return aux;
};

export const getSavedValue = (defaultValue, key) => {
  const storaged = window.localStorage.getItem(key);
  return storaged !== null
    ? JSON.parse(storaged)
    : defaultValue;
}

export const saveValue = (value, key) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}
