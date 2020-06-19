$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/polars/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/polars/arrow_right.png"></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    //validate

    function validateForm(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: {
                    required: true,
                    minlength: 10,
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста введите Ваше имя",
                phone: {
                    required: "Введите номер телефона",
                    minlength: jQuery.validator.format("Номер должен быть в формате 0661111111")
                },
                email: {
                    required: "Введите адрес электронной почты",
                    email: "электронная почта должна быть в формате name@domain.com"
                }
            }
        });
    };


    validateForm('#consultation-form');
    validateForm('#consultation form');
    validateForm('#order form');

});