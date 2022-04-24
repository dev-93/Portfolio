var Pages__nowWorking = false;

const date = document.querySelector("#date");
const today = new Date();
date.innerText = today.getFullYear();

function Pages__goToScroll(top) {
  if (Pages__nowWorking) {
    return false;
  }

  Pages__nowWorking = true;

  $("html,body")
    .stop()
    .animate(
      {
        scrollTop: top,
      },
      500,
      function () {
        Pages__nowWorking = false;
      }
    );
}

function Pages__goTo(index) {
  var $page = $(".pages > div");

  if (index < 0) {
    index = 0;
  } else if (index >= $page.length) {
    index = $page.length - 1;
  }

  var top = parseInt($(".pages > div").eq(index).attr("data-offsetTop"));
  Pages__goToScroll(top);
}

var Pages__activedMenuItem = -1;

function Pages__activeMenuItem(index) {
  if (Pages__activedMenuItem == index) {
    return false;
  }
  Pages__activedMenuItem = index;
  $(".top-bar > .pages-menu > ul > li.active").removeClass("active");
  $(".top-bar > .pages-menu > ul > li").eq(index).addClass("active");
}

function Pages__init() {
  $(".top-bar > .pages-menu > ul > li").click(function () {
    var index = $(this).index();

    var $page = $(".pages > div").eq(index);

    var top = parseInt($page.attr("data-offsetTop"));

    Pages__goToScroll(top);
  });

  $(".pages > div").on("mousewheel DOMMouseScroll", function (e) {
    var index = $(this).index();
    var E = e.originalEvent;
    delta = 0;
    if (E.detail) {
      delta = E.detail * -40;
    } else {
      delta = E.wheelDelta;
    }

    if (delta > 0) {
      Pages__goTo(index - 1);
    } else {
      Pages__goTo(index + 1);
    }

    return false;
  });

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    $(".pages > div").each(function (index, node) {
      var offsetTop = parseInt($(this).attr("data-offsetTop"));

      if (scrollTop <= offsetTop) {
        Pages__activeMenuItem(index);
        return false;
      }
    });
  });

  $(window)
    .resize(function () {
      Pages__updatePageShapeInfo();

      $(window).scroll();
    })
    .resize();
}

function Pages__updatePageShapeInfo() {
  $(".pages > div").each(function (index, node) {
    var width = $(this).width();
    var height = $(this).height();
    var offsetTop = $(this).offset().top;

    $(this).attr("data-width", width);
    $(this).attr("data-height", height);
    $(this).attr("data-offsetTop", offsetTop);
  });
}

Pages__init();

/*텍스트 프롬프터*/

function TextPrompter__showNextWord($el) {
  var text = $el.attr("data-text");
  if (text.length > 0) {
    var word = text.substr(0, 1);

    $el.append(word);

    $el.attr("data-text", text.substr(1));

    setTimeout(function () {
      TextPrompter__showNextWord($el);
    }, 80);
  }
}

$(".text-prompter").each(function (index, node) {
  var $node = $(node);
  var $span = $node.find(">span:first-child");

  TextPrompter__showNextWord($span);
});

/*스크롤 이벤트*/
$(window).scroll(function () {
  var $activeOnView = $(".active-on-view");
  if ($activeOnView.length == 0) {
    return;
  }
  var scrollTop = $(this).scrollTop();
  var windowHeight = $(this).height();
  var visibleBottom = scrollTop + windowHeight;
  var checkBottom = visibleBottom - 100;

  $activeOnView.each(function (index, node) {
    if (checkBottom > $(node).offset().top) {
      $(node).addClass("active");
      $(node).removeClass("active-on-view");
    }
  });

  /*
	
	현재scroll 값 출력
	var scrollValue = $(document).scrollTop(); console.log(scrollValue); 
	*/
});

/*스킬메뉴*/

$(".skill-menu li").click(function () {
  $(this).find("p").slideToggle("fast");
});

$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $(".pages-menu > ul").slideToggle("slow");
  });
});

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $(".top-bar").addClass("change");
    } else {
      $(".top-bar").removeClass("change");
    }
  });
});
