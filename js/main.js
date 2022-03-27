const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};

if (isMobile.any()) {
   document.body.classList.add('_touch');
} else {
   document.body.classList.add('_pc');
}

// BURGER ACTIVE
const menuBurger = document.querySelector('.header__menu-burger');
const menuList = document.querySelector('.menu__list');

if (menuBurger) {
   menuBurger.addEventListener("click", function (e) {
      document.body.classList.toggle('lock');
      menuBurger.classList.toggle('active');
      menuList.classList.toggle('active');
   });
}

// SCROLL
const menuLinks = document.querySelectorAll('.menu__link[data-goto], .top-block__button-link[data-goto]');

if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

         if (menuBurger.classList.contains('active')) {
            document.body.classList.remove('lock');
            menuBurger.classList.remove('active');
            menuList.classList.remove('active');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}

if (menuBurger.classList.contains('active')) {
   document.body.classList.remove('lock');
   menuBurger.classList.remove('active');
   menuList.classList.remove('active');
}