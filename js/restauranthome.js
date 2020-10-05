
// remove the prepare time element
function removebtn(j){
    var x=document.querySelectorAll(".preparetime"+j+" > div");

    for(var i=0;i<x.length;i++){
        x[i].classList.toggle("removevis");
    }
}

// remove the notification after dish is prepared
function removenotif(j){
    $(".notif"+j).slideUp();
}


//Show different color when notification has not been viewed
$(".notifs").hover(function(){
    $(this).css("backgroundColor","#9BFA86");
});


//Initially only show 2 orders
index=2;
var x=$(".container > div");
x.splice(0,2);
$.each(x,function(){
    $(this).hide();
});


//Clicking on view more shows 2 more orders
$(".viewmore").click(function(){
    
    var x=$(".container > div");
    len=x.length;
    x.splice(0,index);
    var cnt=0;
    $.each(x,function(){
        $(this).slideDown();
        cnt++;
        if(cnt==2)
            return false;
    });
    index+=2;
    if(index>=len){
        $(".viewmore").hide();
    }
});