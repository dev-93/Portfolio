
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


/*카테고리 캐러셀*/
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },            
        960:{
            items:7
        },
        1200:{
            items:10
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});