$('.scroll-panel__tab-header-item').on('click', function () {
    const tabName = $(this).data('tab');
    const tab = $('.scroll-panel__tab-content-item[data-tab="'+tabName+'"]');

    $('.scroll-panel__tab-header-item.scroll-panel__tab-header-item_active').removeClass('scroll-panel__tab-header-item_active');
    $(this).addClass('scroll-panel__tab-header-item_active');

    $('.scroll-panel__tab-content-item.scroll-panel__tab-content-item_active').removeClass('scroll-panel__tab-content-item_active');
    tab.addClass('scroll-panel__tab-content-item_active');

});