//Metodo .toggleClass 
// $(document).ready(function() {
//     $('.azienda').click(function () {
//         $('.menu-azienda').toggleClass('active');
//     });
// });


//Metodo .hide .show
// var isVisible = true;

// $(document).ready(function() {
//     $('.azienda').click(function () {
//         if(isVisible) {
//             $('.menu-azienda').hide(); 
//             isVisible = false;
//         }
//         else {
//             $('.menu-azienda').show(); 
//             isVisible = true;
//         }
//     });
// });

//Metodo .fadeIn .fadeOut
// $(document).ready(function() {
//     $('.azienda').mouseenter( function() {
//             $('.menu-azienda').fadeIn(500);
//     }); 

//     $('.azienda').mouseleave( function() {
//             $('.menu-azienda').fadeOut(500);
//     });
// });

//Metodo .SlideDown .SlideUp
$(document).ready(function(){
    $('.azienda').click(function() {
        $('.menu-azienda').slideDown();
    });

    $('.menu-azienda').mouseleave(function() {
        $('.menu-azienda').slideUp();
    });
  });