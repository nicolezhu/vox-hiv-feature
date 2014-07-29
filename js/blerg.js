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


<a class="toggle-bottom" data-name="danny" href="javascript:void(0);" mce_href="javascript:void(0);">Read the danny</a>

function nextPerson() {
  name = $('.toggle-bottom').data().name;
  $('.toggle-bottom').html("Read " + name.upcase() + "'s story");
}

// start actual code in chorus
function browserWide() {
  var window_width = $(window).width();
  $(".fullbleed").css({
    'position' : 'relative',
    'width' : window_width,
    'left' : $('.chorus-snippet').offset().left * -1
  });
};

function scrollToTop() {
console.log( 'clicked' );
  $('html,body').animate({scrollTop: $('.top-nav').offset().top}, 800);
}

function navButtons() {
  $('.chorus-snippet toggles a').parent().addClass('top-nav');
  $('.chorus-snippet .top-nav toggles a').on('click', function(){
    nextPerson();
    nextBanner();
  });
  var $button = $('toggles').clone(true);
  $('.toggle-bottom').parent().parent().addClass('bottom-nav').append($button);
  $('.chorus-snippet .bottom-nav toggles a').on('click', function(){
    scrollToTop();
    nextPerson();
    nextBanner();
  });
}

function nextPerson() {
  var to_capitalize;
  var name;
  var current;
  if (($(".bottom-nav").find('.toggle-selected').next().length == 0)) {
    current = $('.bottom-nav').find('.toggle-selected').data().name;
    name = 'Paige';
  } else {
    to_capitalize = $('.bottom-nav').find('.toggle-selected').next().data().name;
    name = to_capitalize.charAt(0).toUpperCase() + to_capitalize.slice(1);
  }
  $('.quote-banner').removeClass(current);
  $('.quote-banner a').html("Read " + name + "'s story");
}

function nextBanner() {
  var name;
  var current;
  if ($(".bottom-nav").find('.toggle-selected').next().length == 0) {
    console.log('end');
    current = $('.bottom-nav').find('.toggle-selected').data().name;
    name = 'leslie';
  } else {
    current = $('.quote-banner').attr('class').split(' ').pop();
    name = $('.bottom-nav').find('.toggle-selected').next().data().name;
  }
  
  $('.quote-banner').removeClass(current);
  $('.quote-banner').addClass(name);
}

function firstBanner() {
  var name = $('.bottom-nav').find('.toggle-selected').next().data().name;
  $('.quote-banner').addClass(name);
}

$(document).ready(function() {
  browserWide();
  window.onresize = browserWide;
  navButtons();
  $('.bottom-nav em a').wrap("<div class='quote-banner'></div>").removeClass('toggle-bottom');
  $('.quote-banner a').bind('click', scrollToTop);
  nextPerson();
  firstBanner();
  $('.quote-banner').on('click', function() {
    nextPerson();
    nextBanner();
  });
});