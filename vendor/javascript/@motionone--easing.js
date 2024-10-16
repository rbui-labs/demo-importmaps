// @motionone/easing@10.18.0 downloaded from https://ga.jspm.io/npm:@motionone/easing@10.18.0/dist/index.es.js

import{noopReturn as t,clamp as n}from"@motionone/utils";const calcBezier=(t,n,e)=>(((1-3*e+3*n)*t+(3*e-6*n))*t+3*n)*t;const e=1e-7;const i=12;function binarySubdivide(t,n,o,r,c){let u;let a;let s=0;do{a=n+(o-n)/2;u=calcBezier(a,r,c)-t;u>0?o=a:n=a}while(Math.abs(u)>e&&++s<i);return a}function cubicBezier(n,e,i,o){if(n===e&&i===o)return t;const getTForX=t=>binarySubdivide(t,0,1,n,i);return t=>t===0||t===1?t:calcBezier(getTForX(t),e,o)}const steps=(t,e="end")=>i=>{i=e==="end"?Math.min(i,.999):Math.max(i,.001);const o=i*t;const r=e==="end"?Math.floor(o):Math.ceil(o);return n(0,1,r/t)};export{cubicBezier,steps};

