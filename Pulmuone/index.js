$(function () {
	$.scrollify({
		section: ".panel",
		scrollbars: false,
		interstitialSection:".footer",
		before: function (i, panels) {
			$('body').attr('data-scrollify-page-no', i);
			var ref = panels[i].attr("data-section-name");
			$(".pagination .active").removeClass("active");
			$(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
		},
		afterRender: function () {
			var pagination = "<ul class=\"pagination\">";
			var activeClass = "";
			$(".panel").each(function (i) {
				activeClass = "";
				if (i === 0) {
					activeClass = "active";
				}
				pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
			});

			pagination += "</ul>";

			$(".home").append(pagination);

			$(".pagination a").on("click", $.scrollify.move);
		}
	});
});

/*탑 메뉴*/
$('.top-bar .top_bar_con .top_bar_menu').mouseenter(function () {
	$('.top_bar_con').addClass('menu-1-active');
});

$('.top-bar').mouseleave(function () {
	$('.top_bar_con').removeClass('menu-1-active');
});

$('.top-box .top-bar .menu-1 > ul > li').mouseenter(function () {
	$(this).siblings('.active').removeClass('selected');
	$(this).addClass('selected');
});

/*검색버튼 클릭시 fade in, out*/
$(".top-bar .top_bar_con .more_right").click(function(){
	$(".top-search-bar").toggleClass('active');
});

/*보조 메뉴 이벤트 더보기*/

$('.top-bar .top_bar_con .top_bar_menu').mouseenter(function () {
	$('.event_move_btn').addClass('active');
});

$('.top-bar').mouseleave(function () {
	$('.event_move_btn').removeClass('active');
});

/*모바일 메뉴 클릭*/
function showLeftSideBar() {
    $('#left-side-bar').addClass('active');
}
var hideLeftSideBar = function() {
    $('#left-side-bar').removeClass('active');
}

$('.btn_ham').click(showLeftSideBar);
$('.btn_close').click(hideLeftSideBar);

$("#left-side-bar > .menu_bar > ul > li").click(function(){
	$(this).siblings().find(">ul").slideUp(250);
	if($(this).find(">ul").is(":visible")) {
		$(this).find(">ul").slideUp(250);
	} else {
		$(this).find(">ul").slideDown(500);
	}
});

/*footer클릭*/

$(".family_box").click(function(){
	$(".family_box").addClass('active');
});

$('.family_box').mouseleave(function () {
	$('.family_box').removeClass('active');
});



