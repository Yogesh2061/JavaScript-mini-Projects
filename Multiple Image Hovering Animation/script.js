//for 1sr element only
// var elem1 = document.querySelector(".element")
// var elemimg = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove" ,function(dets){
//     elemimg.style.left =dets.x+"px"
//     elemimg.style.top =dets.y+"px"
// })
// elem1.addEventListener("mouseenter" ,function(dets){
//     elemimg.style.opacity = 0.8
    
// })

// elem1.addEventListener("mouseleave" ,function(dets){
//     elemimg.style.opacity = 0
    
// })

var elem = document.querySelectorAll(".element")

elem.forEach(function(val){

val.addEventListener("mouseenter",function(){
    val.childNodes[3].style.opacity=0.8        /*childnode[3] is the image ,1 was h1 and 2 text . check the child node in console if you want.*/
});
val.addEventListener("mouseleave",function(){
    val.childNodes[3].style.opacity=0
});
val.addEventListener("mousemove",function(dets){
    val.childNodes[3].style.left=dets.x+"px"
    // val.childNodes[3].style.top=dets.y+"px"
});
});