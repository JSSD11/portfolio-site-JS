console.log("about script loaded");

var main = document.getElementsByTagName("main")[0];
console.log(main.id);

//reset footer colors
var footer = document.getElementsByTagName("footer")[0];
var footerSpan = footer.getElementsByTagName("h2")[0].getElementsByTagName("span")[0];
  footer.style.backgroundColor="#d0d0d0";
  footer.style.color="#262626";
  footerSpan.style.color ="#ffffff";


  if (window.matchMedia("(min-width: 640px)").matches) {
    var img = document.getElementById("about-s1");
    var widescreen = 16 / 9; //1.78
    var standard = 4 / 3; //1.3333
    var mobile = 9 / 16; //0.562
    var tabletPortrait = 3 / 4; //0.75

    var userRatio = window.screen.width / window.screen.height;

    //0.656; 1.04167 ; 1.55667
    if (userRatio <= (mobile + (tabletPortrait - mobile) / 2)) {
      img.style.backgroundImage = "url('img/about_page/about_background_9_16.png')";
      console.log(window.screen.width);
      console.log(window.screen.height);
      console.log(userRatio);
    } else if (userRatio > (mobile + (tabletPortrait - mobile) / 2) && userRatio <= (tabletPortrait + (standard - tabletPortrait) / 2)) {
      img.style.backgroundImage = "url('img/about_page/about_background_3_4.png')";
      console.log(window.screen.width);
      console.log(window.screen.height);
      console.log(userRatio);
    } else if (userRatio > (tabletPortrait + (standard - tabletPortrait) / 2) && userRatio <= (standard + (widescreen - standard) / 2)) {
      img.style.backgroundImage = "url('img/about_page/about_background_4_3.png')";
      console.log(window.screen.width);
      console.log(window.screen.height);
      console.log(userRatio);
    } else if (userRatio > (standard + (widescreen - standard) / 2) && userRatio <= widescreen) {
      img.style.backgroundImage = "url('img/about_page/about_background_16_9.png')";
      console.log(window.screen.width);
      console.log(window.screen.height);
      console.log(userRatio);
    } else {
      //user using different screen resolution
      img.style.background = "url('img/about_page/about_background_16_9.png')";
      console.log(window.screen.width);
      console.log(window.screen.height);
      console.log(userRatio);
    }
  }

  if (window.matchMedia("(min-width: 1024px)").matches) {
    var headerBg = document.getElementById("about-s1");
    window.onscroll = function() {
      headerBg.style.opacity = 1 - +window.pageYOffset / 550 + '';
      headerBg.style.top = +window.pageYOffset + 'px';
      //headerBg.style.backgroundPositionY = - +window.pageYOffset/2+'px';

    }
  } else {}
