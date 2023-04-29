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

    var productList = [
        {
            id: 1,
            title: 'Маргарита',
            imgName: 'margarita.webp',
            description: 'Тесто дрожжевое, томатный соус, моцарелла, орегано'
        },
        {
            id: 2,
            title: 'Пепперони',
            imgName: 'pepperoni.jpg',
            description: 'Тесто дрожжевое, томатный соус, моцарелла, колбаски пепперони, орегано'
        },
        {
            id: 3,
            title: 'Фунги',
            imgName: 'fungi.jpg',
            description: 'Тесто дрожжевое, томатный соус, моцарелла, бекон, шампиньоны, черный перец, трюфельное масло, орегано'
        },
        {
            id: 4,
            title: '3 Сыра',
            imgName: 'cheesethree.jpg',
            description: 'Тесто дрожжевое, томатный соус, моцарелла, фиор ди латте, гарганзоло, орегано'
        },
        {
            id: 5,
            title: 'Гавайская',
            imgName: 'hawaii.png',
            description: 'Тесто дрожжевое, томатный соус, моцарелла, бекон, куриное филе, ананас, орегано'
        },
    ]
    productList = productList.map((item) => {
        return `<div class="page-pizza-riiska__card">
                    <div class="page-pizza-riiska__card-title">${item.title}</div>
                    <div class="page-pizza-riiska__card-img-wrap">
                        <img class="page-pizza-riiska__card-img" src="${item.imgName}" alt="">
                    </div>
                    <div class="page-pizza-riiska__card-description">
                        ${item.description} 
                    </div>
                </div>`
    });
    $('.js-product-list').html(productList);
});

