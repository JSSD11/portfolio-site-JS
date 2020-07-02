//hide reveal header

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
    console.log("window scroll");
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    var headerHeight = document.getElementById("header").offsetHeight;
    var documentTitle= document.title;

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#header').removeClass('nav-down').addClass('nav-up');
        document.getElementsByClassName('nav-up')[0].style.top = - headerHeight - 5 + "px";
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#header').removeClass('nav-up').addClass('nav-down');
            document.getElementsByClassName('nav-down')[0].style.top ="0";
        }
    }

    lastScrollTop = st;
}

//Slick slider
$(document).ready(function(){
  var slider = $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows : false,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false
  });

  //slider.on('afterChange', function(event, slick, currentSlide){
  // slick - is a slider object with a lot of useful info
  // currentSlide - is a current slide index (starts from 0)
//  if( slick.slideCount === currentSlide + 1 ){
//    slick.paused = true;
//  }
//  });
});
</script>

<script>
  var rellax = new Rellax('.rellax');
</script>

<script>
 AOS.init({
   duration: 1000,
   delay: 300,
   easing: 'ease-out-back',
   once: true,
 });
</script>
