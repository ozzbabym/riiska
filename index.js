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

    //product-list
    var products = [
        {
            id: 1,
            name: 'Молоко',
            img: 'https://avatars.mds.yandex.net/get-mpic/4944925/img_id4999161222536329731.jpeg/orig'
        },
        {
            id: 2,
            name: 'Хлеб',
            img: 'https://avatars.mds.yandex.net/get-mpic/1866085/img_id4883982524270882945.jpeg/orig'
        },
        {
            id: 3,
            name: 'Яйца',
            img: 'https://w7.pngwing.com/pngs/697/534/png-transparent-chicken-egg-eating-egg-white-food-eggs-hd-free-buckle-material-free-logo-design-template-chicken-eggshell.png'
        },
        {
            id: 4,
            name: 'Шпроты',
            img: 'https://main-cdn.sbermegamarket.ru/hlr-system/169/113/722/791/412/5/100039741480b0.jpeg'
        },
        {
            id: 5,
            name: 'Апельсины',
            img: 'https://get.pxhere.com/photo/plant-fruit-orange-food-produce-juicy-juice-fruits-tangerine-clementine-vitamins-oranges-citrus-flowering-plant-citrus-fruit-bitter-orange-mandarin-orange-land-plant-sweet-lemon-tangelo-valencia-orange-navel-oranges-bahia-orange-citrus-sinensis-1343943.jpg'
        },
        {
            id: 6,
            name: 'Горошек',
            img: 'https://solikamsk.unasti.ru/uploads/product/2200/2219/2020-07-20-22-27-45_2020-07-20_20-43-44.jpg'
        },
    ]; 

    function getSortedProducts(goods) {
        var goods = goods.map((item) => {
            return `<div data-id="${item.id}" class="page-catalog__poduct-card">
                        <div class="page-catalog__poduct-card-img-wrapper">
                            <img class="page-catalog__poduct-card-img" src="${item.img}" alt="">
                        </div>
                        <div class="page-catalog__poduct-card-name">${item.name}</div>
                    </div>`;
        }).join('');
        $('.js-product-list').html(goods);
    }
    var goods = [...products];
    getSortedProducts(products);
    
    $('.js-search-input').on('input', (ev) => {
        if (!ev.currentTarget.value) {
            return getSortedProducts(goods);
        }
        var products = goods.filter((item) => {
            return item.name.toLocaleLowerCase().includes(ev.currentTarget.value.toLocaleLowerCase())
        })
        getSortedProducts(products);
    });
});

