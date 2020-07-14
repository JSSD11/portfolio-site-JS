function menuToggle() {
  document.getElementById("mobile-nav").style.width = "100%";
  var x = document.getElementById('hamburger');
  //console.log(x.className);
  if (x.className === 'icon') {
    x.className += ' active';
  } else {
    x.className = 'icon';
    document.getElementById("mobile-nav").style.width = "0%";
  }
}


/*function changeLogo(){
  var body=document.getElementsByTagName("main")[0];
  //console.log(body.id);
  if (body.id=="index"){
    console.log("true");
    var image = document.getElementsByClassName("logo")[0];
    image.src="img/JS_logo_green.svg";
  } else {
    console.log("false");
    var image = document.getElementsByClassName("logo")[0];
    image.src="img/JS_logo_black.svg";
  }
}

window.onload = changeLogo();*/

// Select all links with hashes

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


/*
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
*/
//if (window.matchMedia("(max-width: 1024px)").matches) {
//var prevScrollpos = window.pageYOffset;
//  var headerHeight = document.getElementById("header").offsetHeight;
//  var documentTitle= document.title;
//  console.log(documentTitle);


//  window.onscroll = function() {
//    var currentScrollPos = window.pageYOffset;
//    if (prevScrollpos > currentScrollPos) {
//      document.getElementById("header").style.top = "0";
//      if (documentTitle=="Deck Drills Project"){
//        console.log("deck drills page");
//      document.getElementById("horiz-anchor-nav").style.top = headerHeight + "px";
//      }
//  } else {
//    document.getElementById("header").style.top = - headerHeight - 5 + "px";
//    if (documentTitle=="Deck Drills Project"){
//      document.getElementById("horiz-anchor-nav").style.top = "0";
//    }
//    prevScrollpos = currentScrollPos;
//  }
//}
//}

const workAnchor = $('#work-anchor').offset().top;
console.log(workAnchor);
console.log(document.getElementById('work-anchor').getBoundingClientRect().top);
const graphicWorkAnchor = $('#graphic-work-anchor').offset().top;
console.log(graphicWorkAnchor);

function smoothScroll() {
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransitionLeaveHome() {
  var tl = gsap.timeline();
  tl.to(".loading-screen", {
    duration: 0.6,
    width: "100%",
    left: "0%",
    ease: "Power2.easeIn",
  });

  tl.to(".loading-screen", {
    duration: 0.6,
    width: "100%",
    left: "100%",
    ease: "Power4.easeIn",
    delay: 0.4,
  });
  tl.set(".loading-screen", {
    left: "-100%"
  });
}

function pageTransitionBackHome() {
  var tl = gsap.timeline();
  tl.to(".loading-screen-2", {
    duration: 0.6,
    width: "100%",
    right: "0%",
    ease: "Power2.easeIn",
  });

  tl.to(".loading-screen-2", {
    duration: 0.6,
    width: "100%",
    right: "100%",
    ease: "Power4.easeIn",
    delay: 0.4,
  });
  tl.set(".loading-screen-2", {
    right: "-100%"
  });
}

function pageTransitionFade() {
  var tl = gsap.timeline();
  tl.fromTo(".barba-animating-container", 1, {
    opacity: 0,
    scale: 1.5,
  }, {
    opacity: 1,
    scale: 1,
    transformOrigin: '50% 50%',
    ease: Power4.in,
  });
}

function pageTransitionFadeBottom() {
  var tl = gsap.timeline();
  tl.fromTo(".barba-animating-container", 1.2, {
    opacity: 0,
    y: -200,
  }, {
    opacity: 1,
    y: 0,
    transformOrigin: '50% 50%',
    ease: Power4.inOut,
  });
}

function pageTransitionSlide() {
  var tl = gsap.timeline();
  tl.set(".barba-animating-container", {
    x: window.innerWidth * 1.5,
    scale: 0.8,
    transformOrigin: '50% 50%'
  })

  tl.to(".barba-animating-container", 0.8, {
    x: 0,
    ease: Power4.easeOut
  });

  tl.to(".barba-animating-container", 1, {
    scale: 1,
    ease: Power4.easeOut
  });
}

$(function() {
  barba.init({
    prevent: data => data.el.classList.contains('stopBarba'),
    transitions: [{
        //sync: true,

        async leave(data) {
          const done = this.async();

          pageTransitionLeaveHome();
          await delay(800);
          done();

          $(window).scrollTop(0);
        },

        //  from:{namespace: ['home-page']},
        to: {
          namespace: ['about-page']
        },
      },
      {
        sync: true,
        //  from:{namespace:['about-page']},
        to: {
          namespace: ['home-page']
        },
        async leave(data) {

          console.log(data.next.url.hash);

          const done = this.async();

          pageTransitionBackHome();
          await delay(800);
          done();

          if (data.next.url.hash == "work-anchor") {
            console.log("work section");
            $('#work-anchor').addClass('myclass');
            console.log($('#work').offset().top);
            //$("#work-anchor").get(0).scrollIntoView();

            $('html, body').animate({
              scrollTop: workAnchor
            }, 1000);
            smoothScroll();
          } else if (data.next.url.hash == "graphic-work-anchor") {
            console.log("graphic work section");
            $('#graphic-work-anchor').addClass('myclass');
            console.log($('#graphic-work-anchor').offset().top);
            //$("#graphic-work-anchor").get(0).scrollIntoView();
            $('html, body').animate({
              scrollTop: graphicWorkAnchor
            }, 1000);
            smoothScroll();
          } else {
            $(window).scrollTop(0);
          }

        },
        async enter(data) {
          console.log("enter data");
          console.log(document.getElementById('work-anchor').getBoundingClientRect().top);
          console.log($('#work-anchor').position().top);
        },
      },
      {
        //  name: 'opacity-transition',
        to: {
          namespace: ['project-page']
        },

        leave(data) {

          console.log('leave transition has been applied!');
        },
        async enter(data) {

          const done = this.async();

          pageTransitionFadeBottom();
          await delay(500);
          done();
          $(window).scrollTop(0);

          console.log('enter transition has been applied!');

        },
      },
      {
        //  name: 'opacity-transition',
        to: {
          namespace: ['graphic-projects']
        },

        leave(data) {

          console.log('leave transition has been applied!');
        },
        async enter(data) {

          const done = this.async();

          pageTransitionSlide();
          await delay(200);
          done();
          $(window).scrollTop(0);
          console.log('enter transition has been applied!');
        },
      },
      {
      //  sync: true,
        //  from:{namespace:['about-page']},
        to: {
          namespace: ['my-website']
        },
        async leave(data) {

          console.log(data.next.url.hash);

          const done = this.async();

          pageTransitionLeaveHome();
          await delay(800);
          done();
          $(window).scrollTop(0);
        },
      }
    ],
    views: [{
        namespace: 'home-page',
        beforeEnter({
          next
        }) {
          let scriptHome = document.createElement('script');
          scriptHome.src = './js/scripts-index.js'; // location of your draggable js file that is responsible for that image loading and dragging functionality
          next.container.appendChild(scriptHome);
        },
        afterEnter({
          next
        }) {
          console.log("restting position of anchor link");
          console.log(workAnchor);
        }
      },
      {
        namespace: 'about-page',
        beforeEnter({
          next
        }) {
          let scriptAbout = document.createElement('script');
          scriptAbout.src = './js/scripts-about.js'; // location of your draggable js file that is responsible for that image loading and dragging functionality
          next.container.appendChild(scriptAbout);
        }
      }, {
        namespace: 'project-page',
        afterEnter({
          next
        }) {
          let scriptMpOverview = document.createElement('script');
          scriptMpOverview.src = './js/scripts-overview-projects.js'; // location of your draggable js file that is responsible for that image loading and dragging functionality
          next.container.appendChild(scriptMpOverview);
        }
      }, {
        namespace: 'graphic-projects',
        afterEnter({
          next
        }) {
          let scriptMpOverview = document.createElement('script');
          scriptMpOverview.src = './js/scripts-graphic-work.js'; // location of your draggable js file that is responsible for that image loading and dragging functionality
          next.container.appendChild(scriptMpOverview);
        }
      }
    ],
  });
});

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}



/*/
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
*/

jQuery(function($) {

$(document).on('click', 'a[href^="#"]', function (event){
    event.preventDefault();
    var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
    //change this number to create the additional off set
    var customoffset = 85;
    $('html, body').animate({scrollTop:target_offset - customoffset}, 500);
});

}(jQuery));
