var initialpath = `M10 100 Q 250 100 990 100`;

var finalpath = `M10 100 Q 250 100 990 100`;

var string = document.querySelector("#string")

// string.addEventListener("mouseenter",function(events){
//     console.log("clicked");

// })

// string.addEventListener("mouseleave",function(events){
//     console.log("unclicked");

// })

string.addEventListener("mousemove",function(event){
    // console.log(event.x, " ", event.y);
    path =  `M10 100 Q ${event.x} ${event.y} 990 100`;
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.2,
        ease: "power1.out"
    })
})

string.addEventListener("mouseleave",function(event){
    // console.log(event.x, " ", event.y);
    // path =  `M10 100 Q ${event.x} ${event.y} 990 100`;
    gsap.to("svg path",{
        attr:{d:finalpath},
        duration:0.8,
        ease: "elastic.out(1,0.1)"
    })
})