// Burger
var Menu = {
  el: {
    ham: $('.burger'),
    menuTop: $('.burger__item--top'),
    menuMiddle: $('.burger__item--middle'),
    menuBottom: $('.burger__item--bottom')
  },

  init: function () {
    Menu.bindUIactions();
  },

  bindUIactions: function () {
    Menu.el.ham
      .on(
        'click',
        function (event) {
          Menu.activateMenu(event);
          event.preventDefault();
        }
      );
  },

  activateMenu: function () {
    Menu.el.menuTop.toggleClass('burger__item--top-click');
    Menu.el.menuMiddle.toggleClass('burger__item--middle-click');
    Menu.el.menuBottom.toggleClass('burger__item--bottom-click');
  }
};
Menu.init();

// Menu
$('.burger').click(function () {
  $('.header__nav').fadeToggle();
});

// For disappear menu
 $('.header__nav').click(function () {
  $('.header__nav').fadeToggle();
}); 


// Header-background

(function ($) {
  $(document).ready(function () {
    $(".header__intro").bgswitcher({
      images: [
        '../images/background/header-background1@2x.png',
        '../images/background/header-background2@2x.png',
        '../images/background/header-background3@2x.png',
        '../images/background/header-background4@2x.png',
        '../images/background/header-background5@2x.png',
        '../images/background/header-background6@2x.png',
      ],
      duration: 2000,
      shuffle: true
    });
  });
})(jQuery);
