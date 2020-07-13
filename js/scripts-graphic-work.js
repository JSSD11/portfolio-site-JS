console.log("graphic work script loaded");

var main = document.getElementsByTagName("main")[0];
console.log(main.id);

//Slick slider
var main = document.getElementsByTagName("main")[0];
if (main.id == "letterhead") {
  console.log("this is l&s page");

  var slider = document.getElementsByClassName("slider")[0];
  console.log(slider);

  $(document).ready(function() {

    var slider = $('.slider').not('.slick-initialized').slick({
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      autoplay: false,
      prevArrow: "<img class='slick-prev' src='img/l_s/arrow_left.svg'>",
      nextArrow: "<img class='slick-next' src='img/l_s/arrow_right.svg'>"
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
if (main.id == "branding") {
  console.log("this is branding page");
  $('#laja-lightbox').slickLightbox({
    images: ['img/branding/laja_lion_stickers.jpg', 'img/branding/ll_bag_paper.jpg', 'img/branding/laja_tag.jpg', 'img/branding/laja_foil_stickers.jpg', 'img/branding/ll_clear_stickers.jpg', 'img/branding/laja_label.jpg'],
    slick: {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      prevArrow: "<img class='slick-prev' src='img/branding/arrow_left.svg'>",
      nextArrow: "<img class='slick-next' src='img/branding/arrow_right.svg'>"
    },

  });

  $('#nolia-lightbox').slickLightbox({
    images: ['img/branding/packaging_nolia.jpg', 'img/branding/nolia_label2.jpg', 'img/branding/nolia_window_sticker.jpg'],
    slick: {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      prevArrow: "<img class='slick-prev' src='img/branding/arrow_left.svg'>",
      nextArrow: "<img class='slick-next' src='img/branding/arrow_right.svg'>"
    }
  });

  $('#bea-lightbox').slickLightbox({
    images: ['img/branding/bee_stickers.jpg', 'img/branding/bee_bags.jpg'],
    slick: {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      prevArrow: "<img class='slick-prev' src='img/branding/arrow_left.svg'>",
      nextArrow: "<img class='slick-next' src='img/branding/arrow_right.svg'>"
    }
  });

  $('#pog-lightbox').slickLightbox({
    images: ['img/branding/pog_tote.jpg', 'img/branding/pog_label.jpg'],
    slick: {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      prevArrow: "<img class='slick-prev' src='img/branding/arrow_left.svg'>",
      nextArrow: "<img class='slick-next' src='img/branding/arrow_right.svg'>"
    }
  });

  $('#sag-lightbox').slickLightbox({
    images: ['img/branding/dino_park_box.jpg', 'img/branding/cd_art.jpg'],
    slick: {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      prevArrow: "<img class='slick-prev' src='img/branding/arrow_left.svg'>",
      nextArrow: "<img class='slick-next' src='img/branding/arrow_right.svg'>"
    }
  });
} else {}

var main = document.getElementsByTagName("main")[0];
if (main.id == "signage") {
  console.log("this is signage");

  var slider = document.getElementsByClassName("slider")[0];
  console.log(slider);

  $(document).ready(function() {

    var slider = $('.slider').not('.slick-initialized').slick({
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      autoplay: false,
      prevArrow: "<img class='slick-prev' src='img/l_s/arrow_left.svg'>",
      nextArrow: "<img class='slick-next' src='img/l_s/arrow_right.svg'>"
    });
  });
} else {}

var main = document.getElementsByTagName("main")[0];
if (main.id == "vector") {
  console.log("this is vectorization page");

  var slider = document.getElementsByClassName("slider")[0];
  console.log(slider);

  $(document).ready(function() {

    var slider = $('.slider').not('.slick-initialized').slick({
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      prevArrow: "<img class='slick-prev' src='img/l_s/arrow_left.svg'>",
      nextArrow: "<img class='slick-next' src='img/l_s/arrow_right.svg'>"
    });
  });
} else {}

var main = document.getElementsByTagName("main")[0];
if (main.id == "presentations") {
  console.log("this is presentations page");
  $('#laja-pitch-lightbox').slickLightbox({
    images: ['img/presentations/laja_sample_slides@2x.jpg'],
    slick: {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      prevArrow: "<img class='slick-prev' src='img/branding/arrow_left.svg'>",
      nextArrow: "<img class='slick-next' src='img/branding/arrow_right.svg'>"
    },

  });

  $('#mudo-lightbox').slickLightbox({
    images: ['img/presentations/mudo_sample_slides@2x.jpg'],
    slick: {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      prevArrow: "<img class='slick-prev' src='img/branding/arrow_left.svg'>",
      nextArrow: "<img class='slick-next' src='img/branding/arrow_right.svg'>"
    }
  });

  $('#connect-lightbox').slickLightbox({
    images: ['img/presentations/connect_sample_slides@2x.jpg'],
    slick: {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      prevArrow: "<img class='slick-prev' src='img/branding/arrow_left.svg'>",
      nextArrow: "<img class='slick-next' src='img/branding/arrow_right.svg'>"
    }
  });
} else {}

var main = document.getElementsByTagName("main")[0];
if (main.id == "promotion") {
  console.log("this is promo page");

  var slider = document.getElementsByClassName("slider")[0];
  console.log(slider);

  $(document).ready(function() {

    var slider = $('.slider').not('.slick-initialized').slick({
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow: "<img class='slick-prev' src='img/l_s/arrow_left.svg'>",
      nextArrow: "<img class='slick-next' src='img/l_s/arrow_right.svg'>"
    });
  });
} else {}

//change footer Colours

var projectFooter = document.getElementsByClassName("project-page-footer")[0];
var projectFooterSpan = projectFooter.getElementsByTagName("h2")[0].getElementsByTagName("span")[0];
projectFooter.style.backgroundColor = "#262626";
projectFooter.style.color = "#ffffff";
projectFooterSpan.style.color = "#11c793";
