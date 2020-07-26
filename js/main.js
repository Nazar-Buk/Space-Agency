$('.menu-btn').on('click', function (e) {
  e.preventDefault;
  $('.menu-btn').toggleClass('active-btn');
  $('.menu').toggleClass('active-btn');
});
