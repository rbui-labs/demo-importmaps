// @motionone/types@10.17.1 downloaded from https://ga.jspm.io/npm:@motionone/types@10.17.1/dist/index.es.js

class MotionValue{setAnimation(i){this.animation=i;i===null||i===void 0?void 0:i.finished.then((()=>this.clearAnimation())).catch((()=>{}))}clearAnimation(){this.animation=this.generator=void 0}}export{MotionValue};

