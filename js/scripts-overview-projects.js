//hide reveal header

// Hide Header on on scroll down
/* var didScroll;
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
*/
console.log("project overview script loaded");

var main = document.getElementsByTagName("main")[0];
console.log(main.id);
//Slick slider
var main = document.getElementsByTagName("main")[0];
if (main.id == "mp-overview") {
  console.log("this is mp summary page");

  var slider = document.getElementsByClassName("slider")[0];
  console.log(slider);

  $(document).ready(function() {

    var slider = $('.slider').not('.slick-initialized').slick({
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
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
} else {}


var main = document.getElementsByTagName("main")[0];
if (main.id == "dd-overview") {
  //animate on scroll function
  var ProcessAnimation = function() {

    if (window.matchMedia("(min-width: 640px)").matches) {
      var process = document.getElementById('process-animation-md-lg');
    } else {
      var process = document.getElementById('process-animation-sm');
    }

    checkIfProcessPlayed = function() {
        if (isVisible(process, 200, 100, 100) && neverPlayed()) {
          animateProcess();
          process.classList.add('played-on-scroll');
        };
        return;
      },

      animateProcess = function() {
        process.classList.add('animate');

        //  setTimeout( function() {
        //    process.classList.remove('animate');
        //  }, 6000);

        return;
      },

      isVisible = function(targetElement, elementHeight, offsetTop, offsetBottom) {
        const gridTop = offsetTop,
          gridBottom = window.innerHeight - offsetBottom,
          elementTop = targetElement.getBoundingClientRect().top,
          elementBottom = targetElement.getBoundingClientRect().bottom;

        if (elementTop < gridTop || elementBottom < gridBottom) {
          return true;
        } else {
          return false;
        }
      },

      neverPlayed = function() {
        if (process.classList.contains('played-on-scroll')) {
          return false;
        } else {
          return true;
        }
      };

    return {
      checkIfProcessPlayed: checkIfProcessPlayed,
      animateProcess: animateProcess
    };

  }();

  window.addEventListener('scroll', function() {
    // MainNav.didScroll = true;
    // MainNav.refreshTopChevron();
    ProcessAnimation.checkIfProcessPlayed()
    return;
  });
} else {}

AOS.init({
  duration: 1000,
  delay: 300,
  easing: 'ease-out-back',
  once: true,
});

var rellax = new Rellax('.rellax');

var main = document.getElementsByTagName("main")[0];
if (main.id == "laja-london-page") {

  var ppVideo = document.getElementById("ll-home-video");

  function playPauseHomepage() {
    console.log("video clicked");
    var play = document.getElementById("play-video-button");
    if (ppVideo.paused) {
      play.classList.add('hide-play');
      ppVideo.play();
      console.log("video is playing");
    } else {
      ppVideo.pause();
      play.classList.remove('hide-play');
      console.log("video is paused");
    }
  }
  ppVideo.onplay = function() {
    var play = document.getElementById("play-video-button");
    play.classList.add('hide-play');
    console.log('Playing');
  };
  ppVideo.onpause = function() {
    var play = document.getElementById("play-video-button");
    play.classList.remove('hide-play');
    console.log('Paused');
  };

  var productVideo = document.getElementById("product-video");

  function playPauseProduct() {
    var play = document.getElementById("play-video-button-product");
    if (productVideo.paused) {
      play.classList.add('hide-play');
      productVideo.play();
    } else {
      productVideo.pause();
      play.classList.remove('hide-play');
    }
  }
  productVideo.onplay = function() {
    var play = document.getElementById("play-video-button-product");
    play.classList.add('hide-play');
  };
  productVideo.onpause = function() {
    var play = document.getElementById("play-video-button-product");
    play.classList.remove('hide-play');
  };

  var aboutVideo = document.getElementById("about-video");

  function playPauseAbout() {
    var play = document.getElementById("play-video-button-about");
    if (aboutVideo.paused) {
      play.classList.add('hide-play');
      aboutVideo.play();
    } else {
      aboutVideo.pause();
      play.classList.remove('hide-play');
    }
  }
  aboutVideo.onplay = function() {
    var play = document.getElementById("play-video-button-about");
    play.classList.add('hide-play');
  };
  aboutVideo.onpause = function() {
    var play = document.getElementById("play-video-button-about");
    play.classList.remove('hide-play');
  };

  var lookbookVideo = document.getElementById("lookbook-video");

  function playPauseLookbook() {
    var play = document.getElementById("play-video-button-lookbook");
    if (lookbookVideo.paused) {
      play.classList.add('hide-play');
      lookbookVideo.play();
    } else {
      lookbookVideo.pause();
      play.classList.remove('hide-play');
    }
  }
  lookbookVideo.onplay = function() {
    var play = document.getElementById("play-video-button-lookbook");
    play.classList.add('hide-play');
  };
  lookbookVideo.onpause = function() {
    var play = document.getElementById("play-video-button-lookbook");
    play.classList.remove('hide-play');
  };

  var mobileVideo = document.getElementById("mobile-video");

  function playPauseMobile() {
    var play = document.getElementById("play-video-button-mobile");
    if (mobileVideo.paused) {
      play.classList.add('hide-play');
      mobileVideo.play();
    } else {
      mobileVideo.pause();
      play.classList.remove('hide-play');
    }
  }
  mobileVideo.onplay = function() {
    var play = document.getElementById("play-video-button-mobile");
    play.classList.add('hide-play');
  };
  mobileVideo.onpause = function() {
    var play = document.getElementById("play-video-button-mobile");
    play.classList.remove('hide-play');
  };
} else {}

//change footer Colours

var projectFooter = document.getElementsByClassName("project-page-footer")[0];
var projectFooterSpan = projectFooter.getElementsByTagName("h2")[0].getElementsByTagName("span")[0];
projectFooter.style.backgroundColor = "#262626";
projectFooter.style.color = "#ffffff";
projectFooterSpan.style.color = "#11c793";
