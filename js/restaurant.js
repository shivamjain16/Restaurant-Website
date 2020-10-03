
// Display alert when anyone adds item to cart

var x = document.querySelectorAll(".dishes button");
for(var i=0;i<x.length;i++){
    x[i].addEventListener("click",function(){
        alert("Item added to cart successfully");
    });
}