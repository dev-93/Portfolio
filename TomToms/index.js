/*메인메뉴 호버시 서브메뉴 등장*/

$('.main_menu_con .main_menu > ul > li, .sub_menu_con').mouseenter(function () {
	$(".sub_menu_con, .sub_menu_wrap .bg_top").stop().slideDown(500);
});

$('.main_menu_con .main_menu > ul > li, .sub_menu_con').mouseleave(function () {
	$(".sub_menu_con, .sub_menu_wrap .bg_top").stop().slideUp(500);
});

/*스크롤시 메인메뉴 화면고정걸림*/
$(window).scroll(function () {
	if ($(window).scrollTop() > 0) {
		$('body').addClass('head_wrap_fixed');
	} else {
		$('body').removeClass('head_wrap_fixed');
	}
});

/*모바일 메뉴 */
/*
function show_mb_Bar() {
	// 사이드바를 보여준다.(즉 active 클래스를 추가한다.)
	$(".mb_menu .mb_menu_bar").toggleClass("active");
	$('.mb_menu .mb_menu_bar').slideToggle();

}
$('.mb_menu>.mb_right>li>.ham').click(show_mb_Bar);
*/

$(".mb_right > ul > li .ham").click(function(){
	$(this).toggleClass("active");
	$(".mb_menu .mb_menu_bar").slideToggle();
});


$(".mb_menu>.mb_menu_bar>ul>li").click(function() {
    $(this).siblings().find('> ul').slideUp(200);
    
    if ( $(this).find('> ul').is(':visible') ) {
        $(this).find('> ul').slideUp(200);
    }
    else {	
        $(this).find('> ul').slideDown(200);
    }
});

/*모바일 메뉴 1차 메뉴 클릭시 화살표 방향 바뀜*/

$(".mb_menu_bar > ul > li").click(function(){
	if($(this).hasClass("active")){
		$(this).removeClass("active");
	}
	else{
		$(this).parent().find(".active").removeClass("active");
		$(this).addClass("active");
	}
});

/*메인 메뉴 캐러셀*/
var owl1 = $('.my-1').owlCarousel({
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    loop:true,
    margin:0,
    nav:false	,
    navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        }
    }
})

owl1.on('changed.owl.carousel', function(event) {
    var $element = $(event.target);
    var $current = $element.find('.owl-item').eq(event.item.index);
    var url = $current.find('.item').css('background-image');
    $('.my-1-box-wrap').css('background-image', url);
    
});

/*왼쪽 사이드 메뉴 캐러셀*/
$('.new_menu > .owl-carousel').owlCarousel({
	autoplay: true, // 오토 플레이
	autoplayTimeout: 2000, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기, 2초
	autoplayHoverPause: true, // 마우스 올리면 오토 플레이 멈춤
	loop: true, // 끝에서 다시 처음으로 시작
	margin: 0,
	nav: false,
	responsive: {
		0: {
			items: 1
		}
	}
})


/*반응형 my-box-2 캐러셀*/
$('.my-box-2 > .owl-carousel').owlCarousel({
	autoplay: true, // 오토 플레이
	autoplayTimeout: 2000, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기, 2초
	autoplayHoverPause: true, // 마우스 올리면 오토 플레이 멈춤
	loop: true, // 끝에서 다시 처음으로 시작
	margin: 0,
	nav: false,
	responsive: {
		0: {
			items: 1
		}
	}
})

/*오른쪽 작은 박스 메뉴 캐러셀*/
$('.left_box .owl-carousel').owlCarousel({
	autoplay: true, // 오토 플레이
	autoplayTimeout: 2000, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기, 2초
	autoplayHoverPause: true, // 마우스 올리면 오토 플레이 멈춤
	loop: true, // 끝에서 다시 처음으로 시작
	margin: 0,
	nav: false,
	responsive: {
		0: {
			items: 1
		}
	}
})

/*탐앤탐스 몰 캐러셀*/
$('.tom_mall .owl-carousel').owlCarousel({
	autoplay: true, // 오토 플레이
	autoplayTimeout: 2000, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기, 2초
	autoplayHoverPause: true, // 마우스 올리면 오토 플레이 멈춤
	loop: true, // 끝에서 다시 처음으로 시작
	margin: 0,
	nav: false,
	responsive: {
		320: {
			items: 2
		},
		1080: {
			items: 3
		}
	}
})

/*탑버튼 클릭시 스크롤 위로 0.4초로 스르륵 올라감*/
$('.footer_wrap .footer_con .logo_top').click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 500);
	return false;
});
