// motion@10.18.0 downloaded from https://ga.jspm.io/npm:motion@10.18.0/dist/main.es.js

import{withControls as o,animate as n}from"@motionone/dom";export*from"@motionone/dom";export*from"@motionone/types";import{isFunction as t}from"@motionone/utils";import{Animation as r}from"@motionone/animation";function animateProgress(n,t={}){return o([()=>{const o=new r(n,[0,1],t);o.finished.catch((()=>{}));return o}],t,t.duration)}function animate(o,r,e){const i=t(o)?animateProgress:n;return i(o,r,e)}export{animate};

