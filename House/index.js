/*.탑메뉴 마우스 호버시 작업*/
$('.top-bar .menu-1 > ul > li').mouseenter(function () {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');

    var index = $(this).index();

    $('.sub-menu-bar .menu-1 > ul.active').removeClass('active');
    $('.sub-menu-bar .menu-1 > ul').eq(index).addClass('active');
});

/*서치박스 클릭스 옵션 모드 보임*/
$('.search-box').click(function() {
    $(this).toggleClass('option-mode');
    
    return false; // 자신이 클릭 되었다는 사실을 부모 엘리먼트에게 알리지 않는다.
});

$('body').click(function() {
    $('.search-box').removeClass('option-mode');
});

/* 스크롤 내리면 서브메뉴 안보임
$(window).scroll(function() {
    if ( $(window).scrollTop() > 100 ) {
        $('body').addClass('top-box-fixed');
    }
    else {
        $('body').removeClass('top-box-fixed');
    }
	
});
*/

/*모바일배너 작업*/
$('.mobile-banner > .owl-carousel').owlCarousel({
    autoplay:true, // 오토 플레이
    autoplayTimeout:1000, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기, 2초
    autoplayHoverPause:true, // 마우스 올리면 오토 플레이 멈춤
    loop:true, // 끝에서 다시 처음으로 시작
    margin:0,
    nav:false,
    navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        }
    }
})

/*모바일 메뉴*/
function showLeftSideBar() {
    $('.left-side-bar').addClass('active');
    $('.left-side-bar-bg').css('display', 'block');
}


var hideLeftSideBar = function() {
    $('.left-side-bar').removeClass('active');
    $('.left-side-bar-bg').css('display', 'none');
}

$('.btn-close').click(showLeftSideBar);
$('.left-side-bar-bg').click(hideLeftSideBar);

/*레프트바에있는 메뉴 클릭시 슬라이드 다운 앤 업*/
$('.left-side-bar_primary_menu > ul > li').click(function(e) {
    var $clicked = $(this);
    
    if ( $clicked.hasClass('active') ) {
        $clicked.find(' > ul').slideUp(300);
        $clicked.removeClass('active');
    }
    else {
        // 내 형제 중에서 active 가지고 있는거 빼았는다.
        $clicked.siblings('.active').find('ul').slideUp(300);
        $clicked.siblings('.active').removeClass('active');
        
        // 내가 지금 펼치려는 메뉴의 후손 중에 이미 펼쳐진게 있다면 닫는다.
        $clicked.find('.active > ul').slideUp(300);
        $clicked.find('.active').removeClass('active');
        
        
        // 메뉴를 펼친다.
        $clicked.find(' > ul').slideDown(300);
        $clicked.addClass('active');
    }
    
    e.stopPropagation();
});


/* main_img 캐러셀 작업*/
$('.carousel-2 > .owl-carousel').owlCarousel({
    autoplay: true, // 오토 플레이
    autoplayTimeout: 2000, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기, 0.5초
    autoplayHoverPause: true, // 마우스 올리면 오토 플레이 멈춤
    loop: true, // 끝에서 다시 처음으로 시작
    margin: 0,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1
        }
    }
})

/*.오늘의 기획전 작업*/
$('.kikiki > .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
        320: {
            items: 1
        },
        450: {
            items: 2
        },
        850: {
            items: 3
        },
		1200: {
            items: 4
        },
    },
    autoplay: true, // 오토 플레이 켜기
    autoplayTimeout: 1000, // 오토 플레이 주기
    autoplayHoverPause: true // 마우스 올리면 멈추게하기
})

/*.오늘의 신상품 작업*/
$('.basic_1 .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
        200: {
            items: 2
        },
        600: {
            items: 3
        },
        1200: {
            items: 6
        }
    }
})
