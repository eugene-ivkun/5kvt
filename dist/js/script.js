$(document).ready(function() {

    function displayCheck() {
        isMobile = {
            Android: function() { return navigator.userAgent.match(/Android/i); },
            BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
            iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
            Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
            Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
            any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } 
        };
        let body = $("body");
        if(!!isMobile.any()) {
            body.removeClass("mouse");
            body.addClass("touch");
        }
        else {
            body.removeClass("touch");
            body.addClass("mouse");
        }
    }
    displayCheck();
    $(window).on("resize", displayCheck);

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

        $(document).click(function(e) {
            let menuBtn = $(e.target).closest(".menu-open")
            if( menuBtn.length ) {
                let menuDropdown = $(".navbar-menu__dropdown");
                menuDropdown.find(".active").removeClass("active");
                menuDropdown.toggleClass("active");
                menuBtn.toggleClass("active");
            }
            if( !$(e.target).closest(".navbar-menu__dropdown, .menu-open").length) {
                $(".navbar-menu__dropdown").find(".active").removeClass("active");
                $(".navbar-menu__dropdown").removeClass("active");
                $(".menu-open.active").removeClass("active");
            }
        })

    


        let subMedia = window.matchMedia("(min-width: 781px)");
        function subMediaFunc(){
            if(subMedia.matches) {
                $(".navbar-menu__subcategory-list").autocolumnlist({
                    classname: "navbar-menu__subcategory-col column",
                    columns: 2
                })
            }
            else{
                $(".navbar-menu__subcategory-item ").unwrap(".navbar-menu__subcategory-col");
            }
        }
        subMediaFunc();
        subMedia.addEventListener("change", subMediaFunc);
    
    function headerScroll() {
        let windowTop = $(this).scrollTop();
        let headerTop = $(".header").offset().top + $(".header").outerHeight();
        if(windowTop > (headerTop / 2)) {
            $(".header").removeClass("header--static");
            $(".header").addClass("header--fixed");
        }
        else if(windowTop < (headerTop / 2)) {
            $(".header").removeClass("header--fixed");
            $(".header").addClass("header--static");
        }
    }
    headerScroll();
    $(window).scroll(headerScroll);


});

// (function($){
//     $(window).on("load",function(){
//         $(".navbar-menu__subcategory").mCustomScrollbar({
//             theme:"dark"
//         });
//         $(".navbar-menu__category").mCustomScrollbar({
//             theme:"dark",
//             advanced:{ updateOnContentResize: true }
//         });
//     });
// })(jQuery);
