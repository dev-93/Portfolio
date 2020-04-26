
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
		200:{
            items:2
        },
        400:{
            items:3
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

/*slider-box-1 작업*/
console.clear();
var SliderBox1__$el = $('.slider-box-1');
var SliderBox1__$pagesEl = SliderBox1__$el.find('> .pages');
var SliderBox1__height;
var SliderBox1__offsetTop;
var SliderBox1__pagesHeight;

$(window).resize(function() {
    SliderBox1__height = SliderBox1__$el.height();
    SliderBox1__offsetTop = SliderBox1__$el.offset().top;
    SliderBox1__pagesHeight = SliderBox1__$pagesEl.height();
}).resize();

SliderBox1__$pagesEl.mousemove(function(e) {
    var $pages = $(this);
    var top = e.pageY - SliderBox1__offsetTop;
    
    $pages.css('top', top * -1);
});

SliderBox1__$pagesEl.find(' > div').click(function() {
    var $clickedBtn = $(this);
    
    $clickedBtn.siblings('.active').removeClass('active');
    $clickedBtn.addClass('active');
    
    var index = $clickedBtn.index();
    
    SliderBox1__$el.find('> .slides > div.active').removeClass('active');
	SliderBox1__$el.find('> .pages > div.active').removeClass('active');
    SliderBox1__$el.find('> .slides > div').eq(index).addClass('active');
	SliderBox1__$el.find('> .pages > div').eq(index).addClass('active');
});
