$(document).ready(function() {

    $(".menu-dropdown__btn").click(function() {
        let btn = $(this);
        let item = btn.closest(".menu-dropdown");
        let elem = item.children(".menu-dropdown__elem");

        if(item.parent().hasClass("column")) {
            item.parent(".column").siblings(".column").children(".menu-dropdown").find(".active").removeClass("active");
        }

        elem.find(".active").removeClass("active");
        item.siblings(item).find(".active").removeClass("active");

        elem.toggleClass("active");
        btn.toggleClass("active");
    })

    function menu() {
        let dropdown = $(".navbar-dropdown");
        let menuBtn = $(".menu-open");
        let submenuBack = $(".subcategory__back-btn");
        let subcategory = $(".subcategory");
        let categoryBtn = $(".navbar-dropdown__category-btn");
        let categoryArrow = $(".navbar-dropdown__category-arrow");
        let categoryList = $(".navbar-dropdown__category-list");
        submenuBack.click(function() {
            let btn = $(this);
            let item = btn.closest(".subcategory");
            item.removeClass("active");
            categoryBtn.removeClass("active");
            categoryList.removeClass("active");
            item.find(".active").removeClass("active");
        })
        function toggleSubmenu(b) {
            let btn = b;
            categoryBtn.removeClass("active")
            btn.addClass("active");
            let submenu = $("#" + btn.closest("[data-submenu]").attr("data-submenu"))
            if(!!submenu.length) {
                submenu.siblings(".subcategory").removeClass("active");
                submenu.addClass("active");
            }
            else {
                subcategory.removeClass("active");
            }
        }
        let menuMedia = window.matchMedia("(min-width: 993px)");
        function categoryMediaFunc() {
            if(menuMedia.matches) {
                categoryBtn.off("click");
                categoryBtn.on("mouseover", function() {
                    toggleSubmenu($(this));
                    categoryList.addClass("active");
                });
                categoryList.on("mouseout", function() {
                    if( !$(this).find(".active[data-submenu]").length ) {
                        $(this).removeClass("active");
                        categoryBtn.removeClass("active");
                    }
                })
            }
            else {
                categoryBtn.off("mouseover");
                categoryList.off("mouseout");
                categoryBtn.on("click", function() {
                    toggleSubmenu($(this));
                    categoryList.addClass("active");
                });
            }
        }
        categoryMediaFunc();
        menuMedia.addEventListener("change", categoryMediaFunc);
        function subMediaFunc(){
            if(menuMedia.matches) {
                $(".subcategory__list").autocolumnlist({
                    classname: "subcategory__col column",
                    columns: 2
                })
            }
            else{
                $(".subcategory__item").unwrap(".subcategory__col");
            }
        }
        subMediaFunc();
        menuMedia.addEventListener("change", subMediaFunc);
    }

    menu();

    // $(".banner-slider__main").slick({
    //     prevArrow: $(".banner-slider-prev"),
    //     nextArrow: $(".banner-slider-next"),
    //     mobileFirst: false,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     infinite: true,
    //     responsive: [
    //         {
    //             breakpoint: 577,
    //             settings: {
    //                 variableWidth: true,
    //                 centerMode: true,
    //             }
    //         },
    //         {
    //             breakpoint: 431,
    //             settings: {
    //                 variableWidth: false,
    //                 centerMode: false
    //             }
    //         }
    //     ]
    // });

    $(".products__slider").each(function(index, elem) {
        let sliderParent = $(elem).closest(".products");

        function mobileCheck(sliderObject) {
            if( sliderParent.hasClass("products--mobile-grid") ) {
                return "unslick"
            }
            else return sliderObject;
        }

        $(elem).slick({
            slidesToShow: 4,
            infinite: false,
            prevArrow: $(elem).closest(".products").find(".btn-arrow--prev"),
            nextArrow: $(elem).closest(".products").find(".btn-arrow--next"),
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: mobileCheck({
                        slidesToShow: 2,
                        dots: true,
                        dotsClass: "products__slider-dots slider-dots"
                    })
                },
                {
                    breakpoint: 577,
                    settings: mobileCheck({
                        slidesToShow: 2,
                        centerMode: true,
                        variableWidth: true
                    })
                },
                // {
                //     breakpoint: 768,
                //     settings: (function() {
                //         if( sliderParent.hasClass("products--mobile-grid") ) {
                //             return "unslick"
                //         }
                //         if (sliderParent.hasClass("products--mobile-slider") ) {
                //             return {
                //                 slidesToShow: 2,
                //                 dots: true,
                //                 dotsClass: "products__slider-dots slider-dots",
                //             }
                //         }
                //     }())
                // },
                // {
                //     breakpoint: 577,
                //     settings: function() {

                //     }
                // },
            ]
        });
    });
    $(window).resize(function() {
        $(".products__slider").slick("resize")
    });

    $(".advantages__row").slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
        dotsClass: "advantages__dots slider-dots",
        infinite: false,
        mobileFirst: false,
        adaptiveHeight: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // (function() {
    //     $(".product-gallery__main-inner").slick({
    //         infinite: false,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         asNavFor: '.product-gallery__thumbs-inner',
    //         fade: true,
    //         speed: 200,
    //         prevArrow: ".product-gallery__main-btn--prev",
    //         nextArrow: ".product-gallery__main-btn--next",
    //     });
    //     $(".product-gallery__thumbs-inner").slick({
    //         infinite: false,
    //         slidesToShow: 4,
    //         speed: 200,
    //         vertical: true,
    //         draggable: false,
    //         asNavFor: '.product-gallery__main-inner',
    //         focusOnSelect: true,
    //         prevArrow: ".product-gallery__thumbs-btn--prev",
    //         nextArrow: ".product-gallery__thumbs-btn--next",
    //     });
    
    //     let sliderLength = $(".product-gallery__thumbs-item").length;
    
    //     if(sliderLength < 5) {
    //         $(".product-gallery__thumbs-inner").addClass("remove-scroll");
    //     }
        
    //     function disableButton(){
    //         let sliderLength = $(".product-gallery__thumbs-item").length;
    //         let currentSlide = $('.product-gallery__thumbs-inner').slick("slickCurrentSlide") + 1;
    //         if(currentSlide === sliderLength) {
    //             $(".product-gallery__thumbs-btn--next").addClass("btn-empty")
    //         }
    //         else if(currentSlide === 1) {
    //             $(".product-gallery__thumbs-btn--prev").addClass("btn-empty")
    //         }
    //         else {
    //             $(".product-gallery__thumbs-btn--prev").removeClass("btn-empty")
    //             $(".product-gallery__thumbs-btn--next").removeClass("btn-empty")
    //         }
    //     }
    //     disableButton();
    //     $(".product-gallery__thumbs-inner").on("afterChange", disableButton);
    // }());

    $(".product-gallery__main-inner").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: false,
        fade: true,
        speed: 200,
        prevArrow: ".product-gallery__main-btn--prev",
        nextArrow: ".product-gallery__main-btn--next",
        responsive: [
            {
                breakpoint: 971,
                settings: {
                    fade: false,
                    speed: 500
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    dotsClass: "product-gallery__slider-dots  slider-dots",
                    fade: false,
                    speed: 500,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    dots: true,
                    dotsClass: "product-gallery__slider-dots  slider-dots",
                    fade: false,
                    speed: 500,
                    arrows: false
                }
            }
        ]
    });
    
    if($('.product-gallery__main-inner').length) {
        lightGallery(document.querySelector('.product-gallery__main-inner'), {
            selector: ".product-gallery__main-item-inner",
            thumbnail:true,
            plugins: [lgThumbnail, lgZoom],
            loop: false,
            getCaptionFromTitleOrAlt: false,
            download: false,
            addClass: "product-gallery__modal"
        });
    }

    $(".quantity").click(function(e) {
        let target = $(e.target);
        let input = $(".quantity__number");
        let count = parseInt(input.val());
        let maxCount = parseInt(input.attr("data-max-num"));
        
        let isPlus = target.closest(".quantity-btn-plus").length;
        let isMinus = target.closest(".quantity-btn-minus").length
        if(isPlus && !count) {
            input.val(1);
        }
        if( isPlus && count < maxCount) {
            input.val(count + 1);
        }
        else if( isMinus && count > 1) {
            input.val(count + -1);
        }
    });
    $('.quantity__number').bind("change keyup input click", function() {
        let maxCount = this.dataset.maxNum;
        if(this.value[0] == 0) this.value = 1;
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
        else if(this.value > parseInt(maxCount)) this.value = maxCount;
    });


    $(".rating-stars").click(function(e) {
        if( $(this).attr("data-set-value") ) return;
        if(!$(e.target).closest(".rating-stars__item").length) return;
        let item = $(e.target).closest(".rating-stars__item");
        let ratingValue = parseInt(item.attr("data-rating-value"));
        if(item.hasClass("active") && !item.prev().hasClass("active")) {
            $(this).find(".rating-stars__item").removeClass("active");
            $(this).removeAttr("data-rating-result");
            return;
        }
        $(this).attr("data-rating-result", ratingValue);
        $(this).find(".rating-stars__item").removeClass("active");
        let i;
        for(i = 1; i <= ratingValue; i++) {
            $(this).find('.rating-stars__item[data-rating-value = "' + i + '"]').addClass("active");
        }
    })
    $(".rating-stars").each(function(i, el) {
        if(!$(el).attr("data-set-value")) return;
        let ratingValue = parseInt($(el).attr("data-set-value"));
        let valueSpan = $("<div>", {
            "class": "rating-stars__value",
            text: ratingValue
        });
        valueSpan.prependTo( $(el) );
        for(let i = 1; i <= ratingValue; i++) {
            $(el).find('.rating-stars__item[data-rating-value = "' + i + '"]').addClass("active");
        }
    });

    (function prependProductInfo() {
        let media = window.matchMedia("(max-width: 992px)");
        function prependFunc() {
            if(media.matches){
                $(".product-main__info").prependTo( $(".product-main__wrap-gallery") );
            }
            else {
                $(".product-main__info").prependTo( $(".product-main__details") );
            }
        }
        prependFunc();
        media.addEventListener("change", prependFunc);
    }());

    $(".product-reviews__slider").slick({
        prevArrow: ".product-reviews--prev",
        nextArrow: ".product-reviews--next",
        infinite: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    adaptiveHeight: true,
                    autoplay: false
                }
            }
        ]
    });

    if($(".custom-select").length) {
        $(".custom-select").selectric({
            allowWrap: false
        });
    }

    $(".price-range__input").bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
        let minInput = $(this).parent(".price-range").find(".price-range__input--min");
        let maxInput = $(this).parent(".price-range").find(".price-range__input--max");

        let thisValue = parseInt($(this).val());
        
        if( $(this).hasClass("price-range__input--min") && thisValue > parseInt(maxInput.val()) ) {
            $(this).val( parseInt(maxInput.val()))
        }
    });

    $("[data-popup-open]").click(function() {
        let popup = $("#" + $(this).attr("data-popup-open"));
        popup.toggleClass("active");
        popup.find(".modal-inner").toggleClass("active");
        if($(this).is("[data-popup-remove-all]")) {
            popup.find(".modal-inner .active").removeClass("active");
        }
        $(this).toggleClass("active");
    });

    $(".modal").click(function(e) {
        let modalInner = $(e.target).closest(".modal-inner");
        let closeBtn = $(e.target).closest(".modal-close");
        if(!modalInner.length || closeBtn.length) {
            $(this).removeClass("active");
            $(this).find(".modal-inner").removeClass("active");
            let modalId = $(this).attr("id");
            $("body").find('[data-popup-open = "' + modalId + '"]').removeClass("active");
        }
    })

    $(".main-banner__slider").slick({
        prevArrow: $(".banner-slider-prev"),
        nextArrow: $(".banner-slider-next"),
    });

});