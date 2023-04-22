window.addEventListener('DOMContentLoaded', function() {
    $('.js-router').on('click', function(ev) {
        var page = ev.currentTarget.getAttribute('data-page');
        var pages = $('.page');
        pages.removeClass('page--show');
        pages.each(function(i, el) {
            if (el.dataset.page === page) {
                el.classList.add('page--show');
            }
        });
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
    $('.js-menu-btn').on('click', function(ev) {
        var list = $(ev.currentTarget).find('.header_menu-btn-list-wrapper');
        var show = list.hasClass('header_menu-btn-list-wrapper--show')
        !show ?
            list.addClass('header_menu-btn-list-wrapper--show') :
            list.removeClass('header_menu-btn-list-wrapper--show');
    });
});

