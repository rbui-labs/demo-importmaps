// @motionone/utils@10.18.0 downloaded from https://ga.jspm.io/npm:@motionone/utils@10.18.0/dist/index.es.js

function addUniqueItem(t,e){t.indexOf(e)===-1&&t.push(e)}function removeItem(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const clamp=(t,e,n)=>Math.min(Math.max(n,t),e);const t={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"};const isNumber=t=>typeof t==="number";const isEasingList=t=>Array.isArray(t)&&!isNumber(t[0]);const wrap=(t,e,n)=>{const o=e-t;return((n-t)%o+o)%o+t};function getEasingForSegment(t,e){return isEasingList(t)?t[wrap(0,t.length,e)]:t}const mix=(t,e,n)=>-n*t+n*e+t;const noop=()=>{};const noopReturn=t=>t;const progress=(t,e,n)=>e-t===0?1:(n-t)/(e-t);function fillOffset(t,e){const n=t[t.length-1];for(let o=1;o<=e;o++){const s=progress(0,e,o);t.push(mix(n,1,s))}}function defaultOffset(t){const e=[0];fillOffset(e,t-1);return e}function interpolate(t,e=defaultOffset(t.length),n=noopReturn){const o=t.length;const s=o-e.length;s>0&&fillOffset(e,s);return s=>{let f=0;for(;f<o-2;f++)if(s<e[f+1])break;let r=clamp(0,1,progress(e[f],e[f+1],s));const c=getEasingForSegment(n,f);r=c(r);return mix(t[f],t[f+1],r)}}const isCubicBezier=t=>Array.isArray(t)&&isNumber(t[0]);const isEasingGenerator=t=>typeof t==="object"&&Boolean(t.createAnimation);const isFunction=t=>typeof t==="function";const isString=t=>typeof t==="string";const e={ms:t=>t*1e3,s:t=>t/1e3};
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/function velocityPerSecond(t,e){return e?t*(1e3/e):0}export{addUniqueItem,clamp,defaultOffset,t as defaults,fillOffset,getEasingForSegment,interpolate,isCubicBezier,isEasingGenerator,isEasingList,isFunction,isNumber,isString,mix,noop,noopReturn,progress,removeItem,e as time,velocityPerSecond,wrap};

