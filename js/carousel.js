//carousel automatic movement
$("#carousel").carousel();

//carousel indicator bullets
$("#bullet1").click(function(){
    $("#carousel").carousel(0);
});

$("#bullet2").click(function(){
    $("#carousel").carousel(1);
});

$("#bullet3").click(function(){
    $("#carousel").carousel(2);
});

// left/right carousel controls
$(".left").click(function(){
    $("#carousel").carousel("prev");
});

$(".right").click(function(){
    $("#carousel").carousel("next");
});
