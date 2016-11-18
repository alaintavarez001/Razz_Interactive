// sidenav controls
// open sidenav
$('#sideNavbutton').click(function openNav() {
  $("#Sidenav").css("left","0rem")
               .css("opacity","1");
});
// close sidenav
function closeNav() {
    $("#Sidenav").css("left","-33rem")
                 .css("opacity","0");
};
// carousel controls
// carousel indicator bullets
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
// dropdown menu controls
// replace "how did you hear about us with selection."
$("#dropdownmenu>li>a").click(function(event) {
  (event).preventDefault();
  var source = $(this).find("span").html();
  $("#dropdowntext").html(source);
});
// map selection
var url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDB8aXIxv7p_aiShz7YI8ZZH0eo_fQ21Ns'; //&callback=initialize";
$.getScript(url).done(initialize).fail(errorCallback);
function errorCallback(){
  alert('Failed to contact Google maps API. Please try refreshing the page');
}
// 25.7617° N, 80.1918° W
function initialize() {
  var mapOptions = {
    center: { lat: 25.7617, lng: 80.1918},
    zoom: 8
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}



// AIzaSyAm_277bJ1ArBCtbD-tiRugtEfkJykj-_Q
