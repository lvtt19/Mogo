new Swiper('.swiper-container', {
   
   navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,
   },

   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
   },

   spaceBetween: 150,

   loop: true,

});