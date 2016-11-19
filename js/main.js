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
// map function
google.maps.event.addDomListener(window, 'load', init);

           function init() {
               var mapOptions = {
                   zoom: 17,
                   scrollwheel: false,
                   center: new google.maps.LatLng(25.7617, -80.1918),
                   styles: [
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e9e9e9"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 29
                            },
                            {
                                "weight": 0.2
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 18
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dedede"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "saturation": 36
                            },
                            {
                                "color": "#333333"
                            },
                            {
                                "lightness": 40
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            },
                            {
                                "lightness": 19
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#fefefe"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#fefefe"
                            },
                            {
                                "lightness": 17
                            },
                            {
                                "weight": 1.2
                            }
                        ]
                    }
                ]
               };
               var mapElement = document.getElementById('map');
               var map = new google.maps.Map(mapElement, mapOptions);
           };


// modals
// personalized new contact form modal
$('#submitbutton').click(function(){
  var first = $('#fname').val();
  var last = $('#lname').val();
  var email = $('#email').val();
  $('#contactModalcontent').append(`<p id="thankyou">Thank you, ${first} ${last} for your interest in LUXURY APARTMENT! One of our agents will contant you at the email you provided (${email}) to set up an appointment at your earliest convenience.</p>`);
  $('#fname').val("");
  $('#lname').val("");
  $('#email').val("");
  $("#dropdowntext").html("HOW DID YOU HEAR ABOUT US?");
});

$('#closecontactModal').click(function(){
  $('#thankyou').remove();
});
