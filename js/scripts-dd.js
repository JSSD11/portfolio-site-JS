
if(('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
    console.log("your device IS a touch device");
}else {
  var prototype = document.getElementById('prott-iframe');
  prototype.classList.add('not-touch');
  console.log("your device is NOT a touch device");
}

//Hide reveal main navbar

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
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
        if (window.matchMedia("(min-width: 640px)").matches){
              document.getElementById("horiz-anchor-nav").style.top = "0";
              document.getElementById("horiz-anchor-nav").style.transitionDuration = "0.25s";
            }
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#header').removeClass('nav-up').addClass('nav-down');
            document.getElementsByClassName('nav-down')[0].style.top ="0";
            if (window.matchMedia("(min-width: 640px)").matches){
                console.log("deck drills page");
                 document.getElementById("horiz-anchor-nav").style.top = headerHeight + "px";
                 document.getElementById("horiz-anchor-nav").style.transitionDuration = "0.35s";
              }
        }
    }

    lastScrollTop = st;
}

//reveal fixed navbar

if (window.matchMedia("(min-width: 640px)").matches) {
  const navPrimary = document.querySelector(".nav-container");
  const navSecondary = document.querySelector("#horiz-anchor-nav");
  const processDesc = document.querySelector(".process-container");

  let navPrimaryHeight = navPrimary.getBoundingClientRect().height;
  let navSecondaryHeight = navSecondary.offsetHeight; // getBoundingClientRect() = offsetHeight when there aren't any transforms applied to the element. In case of transforms, the offsetWidth and offsetHeight returns the element's layout width and height, while getBoundingClientRect() returns the rendering width and height.
  let processDescHeight = processDesc.getBoundingClientRect().height;
  let BottomOfProcessDesc = Math.max(processDesc.getBoundingClientRect().top, processDesc.offsetTop) + processDescHeight/3; //gives you the top in relation to where the usr is on page

  console.log(processDesc.getBoundingClientRect().top);
  console.log(processDesc.offsetTop);
  console.log(BottomOfProcessDesc);

  function ShowFixNav(){
    if(window.scrollY >= BottomOfProcessDesc){
        navSecondary.classList.add('show-nav');
        } else{
          document.body.style.paddingTop = '0';
           navSecondary.classList.remove('show-nav');
         }

         console.log(BottomOfProcessDesc, window.scrollY);
         console.log(processDesc.getBoundingClientRect().top);
         console.log(processDesc.offsetTop);

   }

   // function that throttles the event listener (or any function you add)
function throttled(delay, fn) {
  let lastCall = 0;
  return function (...args) {
    const now = (new Date).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  }
}

// On scroll, fire the function
throttled(200, window.addEventListener("scroll", ShowFixNav));

}

//Slick slider
$(document).ready(function(){
  $('.dd-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows : false,
    cssEase: 'linear',
    autoplay: true
  });
});

//PhotoSwipe
var openPhotoSwipe1 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: 'img/deck_drills/prototype_1@1x.jpg',
          w: 1201,
          h: 1234
      },
      {
          src: 'img/deck_drills/prototype_2@1x.jpg',
          w: 1201,
          h: 1181
      },
      {
          src: 'img/deck_drills/prototype_3@1x.jpg',
          w: 1201,
          h: 646
      },
      {
          src: 'img/deck_drills/prototype_4@1x.jpg',
          w: 1201,
          h: 1661
      },
      {
          src: 'img/deck_drills/prototype_5@1x.jpg',
          w: 1201,
          h: 1151
      },
      {
          src: 'img/deck_drills/prototype_6@1x.jpg',
          w: 1201,
          h: 1101
      },
      {
          src: 'img/deck_drills/prototype_7@1x.jpg',
          w: 1201,
          h: 1181
      }
  ];

  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen
      history: false,
      focus: false,
      bgOpacity: 0.75,
      showAnimationDuration: 0,
      hideAnimationDuration: 0,
  };

  var gallery1 = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery1.init();
};

document.getElementById("dd-proto-lbox").onclick=openPhotoSwipe1;
