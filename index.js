window.addEventListener('DOMContentLoaded', function() {
    var listMenu = $('.header_menu-btn-list-wrapper');
    document.addEventListener( 'click', (ev) => {
        ev.stopPropagation();
        var isListMenu = listMenu.hasClass('header_menu-btn-list-wrapper--show');
        if (isListMenu) {
            listMenu.removeClass('header_menu-btn-list-wrapper--show');
        }
    });
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
        ev.stopPropagation();
        var list = $(ev.currentTarget).find('.header_menu-btn-list-wrapper');
        var show = list.hasClass('header_menu-btn-list-wrapper--show')
        !show ?
            list.addClass('header_menu-btn-list-wrapper--show') :
            list.removeClass('header_menu-btn-list-wrapper--show');
    });

    var productList = [
        {
            id: 1,
            title: 'Мясная',
            imgName: 'meat-pizza.JPG',
            weight: 510,
            price: 650,
            description: 'Тесто дрожжевое, томатный соус, моцарелла, колбаски пепперони, куриное филе, бекон, молотый перец, красный лук, орегано',
        },
        {
            id: 2,
            title: 'Пепперони',
            imgName: 'pepperoni-pizza.JPG',
            weight: 450,
            price: 500,
            description: 'Тесто дрожжевое, томатный соус, моцарелла, колбаски пепперони, орегано'
        },
        {
            id: 3,
            title: 'Гавайская',
            imgName: 'hawaii-pizza.JPG',
            weight: 410,
            price: 700,
            description: 'Тесто дрожжевое, томатный соус, моцарелла, бекон, куриное филе, ананасы, орегано'
        },
        {
            id: 4,
            title: '3 Сыра',
            imgName: 'cheesethree.jpg',
            weight: 410,
            price: 600,
            description: 'Тесто дрожжевое, томатный соус, моцарелла, фиор ди латте, горгондзола, орегано'
        },
        {
            id: 5,
            title: 'Фунги',
            imgName: 'fungi-pizza.JPG',
            weight: 455,
            price: 600,
            description: 'Тесто дрожжевое, томатный соус, моцарелла, бекон, шампиньоны, черный перец, трюфельное масло, орегано'

        },
        {
            id: 6,
            title: 'Горгондзола груша',
            imgName: 'pear-pizza.JPG',
            weight: 455,
            price: 700,
            description: 'Тесто дрожжевое, томатный соус, моцарелла, ломтики груши, горгондзола, мёд'

        }
    ]
    productList = productList.map((item) => {
        return `<div class="page-pizza-riiska__card">
                    <div class="page-pizza-riiska__card-title"><strong>${item.title}</strong></div>
                    <div class="page-pizza-riiska__card-img-wrap">
                        <img class="page-pizza-riiska__card-img" src="${item.imgName}" alt="">
                    </div>
                    <div class="page-pizza-riiska__card-description">
                        ${item.description} 
                    </div>
                    <div class="page-pizza-riiska__card-description-info">
                        <div>
                            <strong>${item.weight} гр.</strong> / </strong><strong>${item.price} руб.</strong>
                        </div>
                    </div>
                </div>`
    });
    $('.js-product-list').html(productList);
    $('.carousel').flexslider({
        animation: "slide",
        slideshowSpeed: 2000,
        animationSpeed: 1000,
        controlNav: false,
        directionNav: false,
        pauseOnAction: false,
        pauseOnHover: false,
        rtl: true
      });
});

