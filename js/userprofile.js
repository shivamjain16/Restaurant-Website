var index=2;

document.querySelector(".viewmore").addEventListener("click",viewMoreOrders);
document.querySelector(".myimg").addEventListener("click",changeImageSize);
document.querySelector(".myimgbig").addEventListener("click",changeImageSize);

function viewMoreOrders(){
    var orders=document.querySelectorAll(".order");
    var len=orders.length;
    var curLen=Math.min(len,index+3);
    for(var i=index;i<curLen;i++){
        orders[i].classList.remove("removevis");
    }
    index+=3;
    if(index>=len){
        document.querySelector(".viewmore").classList.add("removevis");
    }
}

function changeImageSize(){
    var myimg=document.querySelector(".myimgblock > img");
    myimg.classList.toggle("myimg");
    myimg.classList.toggle("myimgbig");
}