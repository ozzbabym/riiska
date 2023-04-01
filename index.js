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
    });
    $('.js-menu-btn').on('click', function(ev) {
        var list = $(ev.currentTarget).find('.header_menu-btn-list-wrapper');
        var show = list.hasClass('header_menu-btn-list-wrapper--show')
        !show ?
            list.addClass('header_menu-btn-list-wrapper--show') :
            list.removeClass('header_menu-btn-list-wrapper--show');
    });

    var imgsSlideList = $('.js-slide-img');
    var count = 0;
    function animateSliderImages(count) {
        imgsSlideList.removeClass('page-main__carusel-img--show')
        imgsSlideList[count].classList.add('page-main__carusel-img--show');
        setTimeout(function() {
            count++;
            if (count == imgsSlideList.length) {
                count = 0;
            }
            imgsSlideList[count - 1] && imgsSlideList[count - 1].classList.remove('page-main__carusel-img--show');
            animateSliderImages(count);
        }, 2000);
    }
    animateSliderImages(count);
});

