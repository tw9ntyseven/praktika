$('.menu-btn').on('click', function (e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('body').toggleClass('body_active');
});