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
