let main = document.querySelector("#main");
let cover = document.querySelector("#cover");
let pull = document.querySelector("svg path");
let circle = document.querySelector("svg circle");
let initialpath = `M 38 27 Q 40 132 40 241`;
let svgcontainer = document.querySelector("svg");


// let swingPathAnimation = gsap.to(pull,{
//     attr:{d:finalpoint},
//     duration:1,
//     repeat:-1,
//     yoyo:true,
//     ease: "sine.inOut"
// })

// let swingCircleAnimation = gsap.to(circle,{
//     attr:{cx:174,cy:289},
//     duration:1,
//     repeat:-1,
//     yoyo:true,
//     ease: "sine.inOut"
// })

// 2. When mouse enters: PAUSE the swinging so you can pull it
// svgcontainer.addEventListener("mouseenter", function () {
//     //swingPathAnimation.pause();
//     //swingCircleAnimation.pause();
// });

let isEnter = false;

circle.addEventListener("mouseenter",(e)=>{

    isEnter = true;
})

svgcontainer.addEventListener("mousemove",(e)=>{
    if(isEnter)
    {
        let rect = svgcontainer.getBoundingClientRect();
        let mouseX = e.clientX - rect.left;
        let mouseY = e.clientY - rect.top;

        let dynamicPath = `M 38 27 Q ${mouseX} ${mouseY} 40 241`;

    gsap.to(pull, {
        attr: { d: dynamicPath },
        duration: 0.1,
        ease: "power2.out",
        overwrite: "auto"
    });
    }
})

// svgcontainer.addEventListener("mouseleave", function () {
//     swingPathAnimation.resume();
//     swingCircleAnimation.resume();
// });



gsap.to(cover,{
    transform:"translateX(150%)",
    duration:4,
    
})