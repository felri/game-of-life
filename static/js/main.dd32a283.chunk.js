(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],[,,,,,,,,,,function(n,t,e){},function(n,t,e){},,function(n,t,e){},function(n,t,e){},function(n,t,e){"use strict";e.r(t);var c=e(1),r=e.n(c),a=e(5),i=e.n(a),o=(e(10),e(2)),s=(e(11),e(0));var u=function(n){var t=n.onClick,e=n.children;return Object(s.jsx)("button",{className:"btn",onClick:t,children:e})};e(13);var l=function(n){var t=n.onChange,e=n.label,c=n.value;return Object(s.jsxs)("div",{className:"container-size-input",children:[Object(s.jsx)("label",{children:e}),Object(s.jsx)("input",{value:c,onChange:function(n){return t(n,e)}})]})},j=e(4),f=[[0,1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1],[1,0],[-1,0]],b=function(n,t){for(var e=[],c=0;c<n;c++)e.push(Array.from(Array(t),(function(){return 0})));return e},d=function(n,t){var e=window.localStorage.getItem(t);return null!==e?JSON.parse(e):n},O=function(n,t){window.localStorage.setItem(t,JSON.stringify(n))},h=function(){var n=Object(c.useState)(!1),t=Object(o.a)(n,2),e=t[0],r=t[1],a=Object(c.useState)(parseInt(d(30,"cols"))),i=Object(o.a)(a,2),h=i[0],v=i[1],p=Object(c.useState)(parseInt(d(30,"rows"))),g=Object(o.a)(p,2),m=g[0],x=g[1],C=d(null,"grid"),w=Object(c.useState)((function(){return C||b(m,h)})),k=Object(o.a)(w,2),I=k[0],N=k[1],S=Object(c.useRef)(e);S.current=e;var y=Object(c.useCallback)((function(){S.current&&(N((function(n){return Object(j.a)(n,(function(t){for(var e=function(e){for(var c=function(c){var r=0;f.forEach((function(t){var a=Object(o.a)(t,2),i=a[0],s=a[1],u=e+i,l=c+s;u>=0&&u<m&&l>=0&&l<h&&(r+=n[u][l])})),r<2||r>3?t[e][c]=0:0===n[e][c]&&3===r&&(t[e][c]=1)},r=0;r<h;r++)c(r)},c=0;c<m;c++)e(c)}))})),setTimeout(y,100))}),[h,m]),A=function(n,t){var e,c=(e=n.target.value,0===parseInt(e)||isNaN(parseInt(e))?1:parseInt(e)>100?100:parseInt(e)),a=[];"cols"===t?(a=b(m,c),v(c)):(a=b(c,h),x(c)),O(c,t),r(!1),N(a)};return Object(c.useEffect)((function(){O(I,"grid")}),[I]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"container-btns",children:[Object(s.jsxs)("div",{className:"container-btns",children:[Object(s.jsx)(l,{label:"rows",onChange:A,value:m}),Object(s.jsx)(l,{label:"cols",onChange:A,value:h})]}),Object(s.jsxs)("div",{className:"container-btns",children:[Object(s.jsx)(u,{onClick:function(){r(!e),e||(S.current=!0,y())},children:e?"stop":"start"}),Object(s.jsx)(u,{onClick:function(){for(var n=[],t=0;t<m;t++)n.push(Array.from(Array(h),(function(){return Math.random()>.7?1:0})));N(n)},children:"random"}),Object(s.jsx)(u,{onClick:function(){N(b(m,h))},children:"clear"})]})]}),Object(s.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(h,", 10px)")},children:I.map((function(n,t){return n.map((function(n,e){return Object(s.jsx)("div",{onClick:function(){var n=Object(j.a)(I,(function(n){n[t][e]=I[t][e]?0:1}));N(n)},style:{width:10,height:10,backgroundColor:I[t][e]?"white":void 0,border:"solid 1px white"}},"".concat(t,"-").concat(e))}))}))})]})};e(14);var v=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(h,{})})},p=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,16)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;e(n),c(n),r(n),a(n),i(n)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),p()}],[[15,1,2]]]);
//# sourceMappingURL=main.dd32a283.chunk.js.map