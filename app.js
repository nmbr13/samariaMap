var locationDots =[];
var dot = new Object{};

$(document).ready(function(){
    $('.overlay').hide();
    $('.buttonLink').mouseenter(function(){
        console.log("Click all the things!");
        $('.info').fadeOut(500).hide();
        $(this).children().fadeIn(500).show();
        $('.overlay').show();
    });

    $('body').click(function(){
        console.log("Click nope!");
        $('.info').fadeOut(500).hide();
        $('.overlay').hide();
    });
    //Makes the map draggable.
      $( "#draggable" ).draggable();
    //


});
