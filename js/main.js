


// $(document).ready(function(){
// 	$(".cbp-hrsub-inner").mouseover(function(){
// 		$(this).find(".description").css({'display': 'none'});
// 	});

// 	$(".descr").mouseover(function(){
// 	var descr = $(this).attr('data-description');
// 	$('.description p').text(descr);

// 	});

// });

$(document).ready(function(){
	$(window).scroll(function() {
	if ($(this).scrollTop() > 600){  
	    $('.cbp-hrmenu').addClass("sticky");
	    // $('.logo').addClass("none");
	    $('.top_part').addClass("white");
	  }
	  else{
	    $('.cbp-hrmenu').removeClass("sticky");
	    // $('.logo').removeClass("none");
	    $('.top_part').removeClass("white");
	  }
	});
});

$(document).ready(function(){
	var hHeight = $("html").height(),
	    radius  = 0;

	$(window).scroll(function() {
	  var scrollTop = $(window).scrollTop();
	  var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
	      percent   = 300 - ((300*scrollBottom)/hHeight) * 2;
	  $(".round").css("border-radius", '0 0 0' + percent + "%");
	});
});

$(document).ready(function(){

var hHeight = $("html").height(),
    radius  = 0;

$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
      percent   = 90 - ((90*scrollBottom)/hHeight) * 4;
  $(".inner_circle").css("border-radius", '0 0' + percent + "%" + '0');
});
});

$(document).ready(function () {
    var marquee = $('div.marquee');
    var totalWidth = 0; $('div.marquee-text span').each(function () { totalWidth += $(this).outerWidth(true); });
    marquee.each(function () {
        var mar = $(this), indent = mar.width();
        mar.marquee = function () {
            indent--;
            mar.css('text-indent', indent);
            if (indent < -1 * totalWidth) {
                indent = mar.width();
            }
        };
        mar.data('interval', setInterval(mar.marquee, 1000 / 60));
    });
});

$(document).ready(function () {
    $.easing.def = "easeInOutQuad";
    $('#nav > li > a').click(function (e) {
        var dropDown = $(this).next();
        $('.dropdown').not(dropDown).slideUp('slow');
        dropDown.slideToggle('slow');

        if (e.currentTarget.currentTarget.pathname === "/home.php") {
            e.preventDefault();
        }
    })
});


$(document).ready(function () {
    $(".close").click(function(){
        $(".testing").addClass("none");
    });
    
});


$(document).ready(function () {

$(window).on("scroll", function() {
    $(window).scrollTop( function(){
        $(".qwe.cbp-hropen").toggleClass('cbp-hropen');        
    });
});
    
});




// $(document).ready(function(){
// 	$(window).scroll(function() {
// 	if ($(this).scrollTop() > 950){  
// 	    $('.testing').addClass("sticky");
// 	  }
// 	  else{
// 	    $('.testing').removeClass("sticky");
// 	  }
// 	});
// });

 jQuery(document).ready(function($){
            var wnd = $(window),
                opacityControl = $('.opacity');

            wnd.scroll(function(){
                var top = wnd.scrollTop(),
                    opacity = top > 500 ? 1 : top * 3 / 1000;
               
                opacityControl.css('opacity', 1 - opacity);
            });
    });

    jQuery(document).ready(function($){
            $('.logo-opa').css({'opacity':"1", "margin":"0 auto 50px", "padding":"20px 0 0 0"})
        });


    jQuery(document).ready(function($){
        setTimeout(function(){
            $('.logo-opa').fadeOut( 3000 );
        },10000);
    });


    var responsiveWidth = 1023;
var _widthResize;

$(window).resize(function() {
    _widthResize = $(this).width() > responsiveWidth;
}).resize();

$('.navBox >ul >li').hover(function(){
  if(_widthResize){
    var _this = $(this);
    _this.addClass('active').children('.dropNav').stop(true, true).slideDown(300);        
  }  
} , function(){
  if(_widthResize){
    $(this).removeClass('active').children('.dropNav').stop(true, true).hide();
  }   
});

$('.dropNav').parent('li').click(function(e) {
  if(!_widthResize){
    $(this).children('.dropNav').stop(true, true).slideToggle(300);
    e.preventDefault();
  }    
});


(function($){
  $.fn.extend({

    sideNav : function(){
      if( $('.pageslideBg').length == 0 ) {
            $('<div />').attr( 'class', 'pageslideBg' ).appendTo( $('body') );      
        }
        var $btn = $(this),
          $pageslide = $($btn.attr("href")),
        $pageslideBg = $('.pageslideBg'),
        _width = $pageslide.width();
      $btn.click(function(){
        $pageslideBg.show();
        $pageslide.css({ 'display':'block'}).animate({'left':0 });
        return false;
      });
      $pageslideBg.click(function() {
        $(this).hide();
        $pageslide.animate({'left': _width*-1 + 'px' },function(){
          $(this).hide();
        });
        return false;
      });

      return this;
    }

  });
})(jQuery);

$("#openPageslide").sideNav();


jQuery(document).ready(function($){
  $(".big_wrapp .first").hover(

    function(){
      
      $(".big_wrapp .first .text").css({"opacity":"1"});
      
      },

    function(){
      
      $(".big_wrapp .first .text").css({"opacity":"0"});
      
    }  
  )
  $(".big_wrapp .seccond").hover(

    function(){
      
      $(".big_wrapp .seccond .text").css({"opacity":"1"});
      
      },

    function(){
      
      $(".big_wrapp .seccond .text").css({"opacity":"0"});
      
    }  
  )
  $(".big_wrapp .third").hover(

    function(){
      
      $(".big_wrapp .third .text").css({"opacity":"1"});
      
      },

    function(){
      
      $(".big_wrapp .third .text").css({"opacity":"0"});
      
    }  
  )

});