
// remove the prepare time element
function removebtn(j){
    var x=document.querySelectorAll(".preparetime"+j+" > div");

    for(var i=0;i<x.length;i++){
        x[i].classList.toggle("removevis");
    }
}

// remove the notification after dish is prepared
function removenotif(j){
    var x=document.querySelector(".notif"+ j);
    x.classList.add("removevis");
}