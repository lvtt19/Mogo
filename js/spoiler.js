$(document).ready(function () {
   $('.column__column-title').click(function (event) {
      if ($('.spoiler').hasClass('one')) {
         $('.column__column-title').not($(this)).removeClass('active');
         $('.column__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});