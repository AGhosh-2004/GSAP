gsap.to("#page2 h2",{
    // transform:"translateX(-170%)"
    x:-1450,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end: "top -90%",
        scrub: 2,
        pin:true,
    }
})