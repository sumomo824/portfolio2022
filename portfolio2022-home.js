//jQuery
$(function(){
  /* 画面遷移 */
  $('body').fadeIn(1000);

  /* アコーディオンメニュー */
  $('#hide-list').on('click',function(){
    $('#hide-list').toggleClass('close');
    $('.container00').toggleClass('fade');
    $('body').toggleClass('no-scroll');
  });
  $('#contact-close').click(function(){
        $('#hide-list').removeClass('close');
        $('.container00').removeClass('fade');
        $('body').removeClass('no-scroll');
    });
  
  /* 画像変化 */
  if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    // ❶スマホのみに適用させるJavaScriptを記述
       $('.second-contents').off('mouseenter mouseleave'); 
    } else {
    // ❷その他PC・タブレットに適用させるJavaScriptを記述
    /* 画像変化 */
  $('.second-contents').hover(function(){
    $('#img-Blsmm').hide();
    $('.img02 h1').hide();
    $('#img-smm').fadeIn(1500);
  },function(){
    $('#img-smm').hide();
    $('.img02 h1').fadeIn(2000);
    $('#img-Blsmm').fadeIn(2000);
  });
    }
  
  
  /* スライド */

  function toggleChangeBtn(){
    var slideIndex=$('.list04').index($('.active'));
    $('.btn').show();
    if(slideIndex == 0){
      $('#prev').hide();
    }else if(slideIndex == 2){
      $('#next').hide();
    }
  }
  
  toggleChangeBtn();

  $('#prev').click(function(){
    var $activeSlide=$('.active');
    $activeSlide.removeClass('active');
    $activeSlide.prev().addClass('active');
    toggleChangeBtn();
  });
  $('#next').click(function(){
    var $activeSlide=$('.active');
    $activeSlide.removeClass('active');
    $activeSlide.next().addClass('active');
    toggleChangeBtn();
  });

  /* アイコン装飾 */
  if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    // ❶スマホのみに適用させるJavaScriptを記述
        $(this).find('i').css('color','#C7A23A');
        $(this).find('.line').css('background-color','#C7A23A');
        $(this).find('.hide06').css('color','#4d4d4d');
    } else {
    // ❷その他PC・タブレットに適用させるJavaScriptを記述
    $(this).find('.icon06').hover(function(){
        $(this).find('i').css('color','#C7A23A');
        $(this).find('.line').css('background-color','#C7A23A');
        $(this).find('.hide06').css('color','#4d4d4d');
      },function(){
        $(this).find('i').css('color','#4d4d4d');
        $(this).find('.line').css('background-color','#c7a13a00');
        $(this).find('.hide06').css('color','#4d4d4d00');
      });
    }

  });
