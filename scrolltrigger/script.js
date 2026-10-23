gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
})

gsap.from("#page2 #box",{
    scale:0,
    // delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2",   //rule is if pin is used then trigger should be used on parent
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,
        pin:true
    } //value is the target element
})