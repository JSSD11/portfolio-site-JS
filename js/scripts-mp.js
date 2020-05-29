//hide reveal header

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
        if (window.matchMedia("(min-width: 640px)").matches && documentTitle=="Deck Drills Project"){
              document.getElementById("horiz-anchor-nav").style.top = "0";
              document.getElementById("horiz-anchor-nav").style.transitionDuration = "0.25s";
            }
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#header').removeClass('nav-up').addClass('nav-down');
            document.getElementsByClassName('nav-down')[0].style.top ="0";
            if (window.matchMedia("(min-width: 640px)").matches && documentTitle=="Deck Drills Project"){
                console.log("deck drills page");
                 document.getElementById("horiz-anchor-nav").style.top = headerHeight + "px";
                 document.getElementById("horiz-anchor-nav").style.transitionDuration = "0.35s";
              }
        }
    }

    lastScrollTop = st;
}

//Slick slider
$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
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
          src: 'img/monstapursuit/strava@1x.jpg',
          w: 1200,
          h: 2195
      },
      {
          src: 'img/monstapursuit/endomondo@1x.jpg',
          w: 1200,
          h: 2195
      },
      {
          src: 'img/monstapursuit/zombiesrun@1x.jpg',
          w: 1200,
          h: 2195
      },
      {
          src: 'img/monstapursuit/goosechase@1x.jpg',
          w: 1200,
          h: 2195
      },
      {
          src: 'img/monstapursuit/geocaching@1x.jpg',
          w: 1200,
          h: 2195
      }
  ];

  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen
      history: false,
      focus: false,
      bgOpacity: 0.75,
      showAnimationDuration: 0,
      hideAnimationDuration: 0
  };

  var gallery1 = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery1.init();
};

document.getElementById("analysis").onclick=openPhotoSwipe1;

var openPhotoSwipe2 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: 'img/monstapursuit/prototype_1.jpg',
          w: 1401,
          h: 699
      },
      {
          src: 'img/monstapursuit/prototype_2.jpg',
          w: 1401,
          h: 700
      },
      {
          src: 'img/monstapursuit/prototype_3.jpg',
          w: 1401,
          h: 700
      }
  ];

  // define options (if needed)
  var options = {
      history: false,
      focus: false,
      bgOpacity: 0.75,
      showAnimationDuration: 0,
      hideAnimationDuration: 0
  };

  var gallery2 = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery2.init();
};

document.getElementById("prototype").onclick=openPhotoSwipe2;

var openPhotoSwipe3 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: 'img/monstapursuit/style_guide/style-guide-01.jpg',
          w: 1626,
          h: 1126
      },
      {
        src: 'img/monstapursuit/style_guide/style-guide-02.jpg',
        w: 1626,
        h: 1126
      },
      {
        src: 'img/monstapursuit/style_guide/style-guide-03.jpg',
        w: 1626,
        h: 1126
      },
      {
        src: 'img/monstapursuit/style_guide/style-guide-04.jpg',
        w: 1626,
        h: 1126
      },
      {
        src: 'img/monstapursuit/style_guide/style-guide-05.jpg',
        w: 1626,
        h: 1126
      },
      {
        src: 'img/monstapursuit/style_guide/style-guide-06.jpg',
        w: 1626,
        h: 1126
      },
      {
        src: 'img/monstapursuit/style_guide/style-guide-07.jpg',
        w: 1626,
        h: 1126
      },
      {
        src: 'img/monstapursuit/style_guide/style-guide-08.jpg',
        w: 1626,
        h: 1126
      },
      {
        src: 'img/monstapursuit/style_guide/style-guide-09.jpg',
        w: 1626,
        h: 1126
      },
      {
        src: 'img/monstapursuit/style_guide/style-guide-10.jpg',
        w: 1626,
        h: 1126
      },
      {
        src: 'img/monstapursuit/style_guide/style-guide-11.jpg',
        w: 1626,
        h: 1126
      },
      {
        src: 'img/monstapursuit/style_guide/style-guide-12.jpg',
        w: 1626,
        h: 1126
      },
      {
        src: 'img/monstapursuit/style_guide/style-guide-13.jpg',
        w: 1626,
        h: 1126
      },
      {
        src: 'img/monstapursuit/style_guide/style-guide-14.jpg',
        w: 1626,
        h: 1126
      },
      {
        src: 'img/monstapursuit/style_guide/style-guide-15.jpg',
        w: 1626,
        h: 1126
      },
      {
        src: 'img/monstapursuit/style_guide/style-guide-16.jpg',
        w: 1626,
        h: 1126
      },
      {
        src: 'img/monstapursuit/style_guide/style-guide-17.jpg',
        w: 1626,
        h: 1126
      }
  ];

  // define options (if needed)
  var options = {
      history: false,
      focus: false,
      bgOpacity: 0.75,
      showAnimationDuration: 0,
      hideAnimationDuration: 0
  };

  var gallery3 = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery3.init();
};

document.getElementById("style-guide-lbox").onclick=openPhotoSwipe3;
