gsap.registerPlugin(MotionPathPlugin);

let t1 = gsap.timeline({repeat:-1});
let t2 = gsap.timeline();

t1.to(".top", {
  duration:1,
  ease:"none",
  motionPath:{
    path: ".orbit",
    align: ".orbit",
    alignOrigin: [-0.1, 1]
}
});

t2.to(".top",{xPercent:100, duration:4,stagger:{
  repeat:-1, 
  yoyo:true,
}});