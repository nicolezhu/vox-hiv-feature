browser_wide : function() {
      if(Chorus.Environment.currentBreakpoint().index >= 4) {
        var window_width = $window.width();
        $('.' + defaults.browser_wide_class).each(function(){
          $(this).css({
            'position' : 'relative',
            'width' : window_width,
            'left' : $('.content').offset().left * -1
          });
        });
      } else if (Chorus.Environment.currentBreakpoint().index < 4) {
        $('.' + defaults.browser_wide_class).each(function(){
          $(this).css({
            'position' : 'relative',
            'width' : window_width,
            'left' : 0
          });
        });
      }
    },

    resize : function() {
      if(defaults.toc.length) _snippet.toc.resize();
      if($('.' + defaults.browser_wide_class).length) _snippet.browser_wide();
    },

    resizer : function() {
      clearTimeout(resize_id);
      resize_id = setTimeout(_snippet.resize, 200);
    }

  };

// start actual code in chorus
function browserWide() {
  var window_width = $(window).width();
  $(".fullbleed").css({
    'position' : 'relative',
    'width' : window_width,
    'left' : $('.chorus-snippet').offset().left * -1
  });
};

function navButtons() {
  $('.chorus-snippet toggles a').parent().addClass('top-nav');
  var $button = $('toggles').clone(true);
  $('.toggle-bottom').parent().parent().addClass('bottom-nav').append($button);
  $('.chorus-snippet .bottom-nav toggles a').on('click', function(){
    $('html,body').animate({scrollTop: $('.top-nav').offset().top}, 800);
  });
}

$(document).ready(function() {
  browserWide();
  window.onresize = browserWide;
  
  navButtons();
  $('.toggle-bottom').html("Read more");
});