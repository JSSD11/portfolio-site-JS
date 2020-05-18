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

function changeLogo(){
  var body=document.getElementsByTagName("body")[0];
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

window.onload = changeLogo();

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
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
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  
