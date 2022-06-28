$(document).ready(function(){
    
    $('head').load('head.html');
    $('#login-before').load('header-before.html');
    $('#login-stu').load('header-stu.html');
    $('#login-tea').load('header-tea.html');

    var swiper = new Swiper(".school-food", {
        navigation: {
            nextEl: ".next-day",
            prevEl: ".prev-day",
        },
    });

    $('.move-class').click(function(e){
        e.preventDefault();
        $('.move-class-list').show();
    });
    $('.move-class-list > li').click(function(e){
        e.preventDefault();
        $('.move-class-list').hide();
    });

    var swiper = new Swiper(".class-offcial-group", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".next-class",
            prevEl: ".prev-class",
        },
    });

    $("#class-basic-setting").on("click", function(e){
        e.preventDefault();
        if ($(this).is(':checked') == true){
            $(".delete").hide();
        }else{
            $(".delete").show();
        }
    });

    $('.setting-btn').click(function(e){
        e.preventDefault();
        $('.class-setting-popup').show();
    });
    $('.close-btn').click(function(e){
        e.preventDefault();
        $('.class-setting-popup, .class-login-popup, .student-loding-popup, .login-warning-popup').hide();
    });

    $('.page-btn').on('click', function(e){
        if ($(this).hasClass('active') === true) {
            $(this).siblings().removeClass('active');
        } else {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }
    });

    $('.hide-password').on('click', function(e){
        if ($(this).hasClass('show-password') === true) {
            $(this).removeClass('show-password');
        } else {
            $(this).addClass('show-password');
        }
    });

    $('.stu-all-summit').click(function(){
        $('.student-loding-popup').show();
    });
})