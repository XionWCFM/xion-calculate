import{useRef as n}from"react";var o=(r,t)=>{let e=n(null);return(...u)=>{e.current&&clearTimeout(e.current),e.current=setTimeout(()=>{r(...u),e.current=null},t)}};export{o as useDebounce};
//# sourceMappingURL=index.js.map
