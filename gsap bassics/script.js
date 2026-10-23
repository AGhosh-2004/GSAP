// gsap.to("#box",{  //1st param is target element and the 2nd param is property
//     x:500,  //move in x axis
//     y:500,//move in y axis
//     duration:2, //duration
//     delay:1, //delay like css animation
//     rotate:360,
//     backgroundColor:"blue", //css property no dash like js 
//     borderRadius:"50%",
//     scale:0.5,
//     repeat:-1, //count proprty like in css if -1 is infinite and if iteration is 2 then it will occur 3 times 
//     yoyo:true  
// })

//.from() take us from final to initial and in this we nwrite the final step and initial state is defined in css file
//.to() take us form initial to final in this we write the final step and initial is written is css file

// gsap.from("#box",{
//     x:500,  //move in x axis
//     y:500,//move in y axis
//     duration:2, //duration
//     delay:1
// })

// gsap.from("h1",{
//     color:"red",
//     duration:2,
//     delay:1,
//     opacity:0,
//     y:200,
//     stagger: 0.5 // stagger applys thge property one by one on ecah h1. if value is positive then apply order will be first to last and i negetive then last to first
// })


                             //timeline for nav
// var tl = gsap.timeline();
// tl.from("h2",{
//     y:-30,    //-30 means it will come from top to initial position and positive means from buttom
//     opacity: 0,
//     duration:1.5,
//     delay: 0.5
// })

// tl.from("h4",{
//     y:-30,
//     opacity: 0,
//     delay: 0.5,
//     stagger:0.5
// })

// tl.from("h1",{
//     y:30,
//     opacity: 0,
//     duration:1,
//     scale:0.3
// })

