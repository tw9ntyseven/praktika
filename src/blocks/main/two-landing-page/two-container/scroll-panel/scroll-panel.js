$('.js-tab-trigger').on('click', function () {
    const tabName = $(this).data('tab');
    const tab = $('.js-tab-content[data-tab="'+tabName+'"]');

    $('.js-tab-trigger.active').removeClass('active');
    $(this).addClass('active');

    $('.js-tab-content.active').removeClass('active');
    tab.addClass('active');

});