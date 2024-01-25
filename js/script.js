$(function(){
  //gnb all 메뉴 열기
  let count = 1;

  $('.btn-list').click(function(){
    $('#gnb').show();
  });
  $('.closebox').click(function(){
    $('#gnb').hide();
  });

  //main-nav
  $('.main-nav').hover(function(){
     $('.header-background').stop().slideToggle(200);
     $(".d-sub-title-before").removeClass('d-sub-title-before-hover');
     $(".d-sub-title").find("a").removeClass("act").addClass("black-font");
     $('.d-sub-title').find("span").removeClass("act");
     $('.main-nav a, .logo, .btn-h-line, .ri-global-line, .ri-search-line').stop().toggleClass("black-font");
     $('.searchform,.btn-h-line').stop().toggleClass("black-border");
  });
 
  $(window).scroll(function(){
      console.log($(window).scrollTop());
  });

  $('.main-nav>li').hover(function(){
     $(this).find('.d-submenu-main').toggle();
  });

  $('.d-sub-title').prepend('<div class="d-sub-title-before"></div>');

  $('.d-sub-title').mouseenter(function(){
     $(".d-sub-title-before").removeClass('d-sub-title-before-hover');
     $(".d-sub-title").find("a").removeClass("act").addClass("black-font");
     $('.d-sub-title').find("span").removeClass("act");
     $(this).find(".d-sub-title-before").addClass('d-sub-title-before-hover');
     $(this).find("a").removeClass("black-font").addClass("act");
     $(this).find('span').addClass("act");
  });

  //배너 애니메이션

  // $('.banner-in').css('width', (504*4)+"px");
  setInterval(mySlide, 5000);

function mySlide(){
count++;
if(count > 4){
  count=1;
}
$('.count').text(count);
  $('.banner-in').animate({
    'left':'-504px'
  },500, function(){
    $('.banner-in img:eq(0)').clone().appendTo('.banner-in');
    $('.banner-in img:eq(0)').remove();
    $('.banner-in').css('left',0);
  });
}

}); //jquery



