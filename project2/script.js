var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");
main.addEventListener("mousemove",function(e){
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:0.1,
    })
})

image.addEventListener("mouseenter",function(e){
    cursor.innerText = "click me";
    
    gsap.to(cursor,{
        scale:4,
        backgroundColor: "#ffffff58"
    })
})


image.addEventListener("mouseleave",function(e){
    cursor.innerText = "";
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"white"
    })
})