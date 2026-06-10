$(function () {

  /* 모바일메뉴 */
  $('.mobileBtn').click(function () {
    $('#mobileMenuWrap').addClass('active');
    $('body').addClass('mobileNonScroll');
    $('.mobileMenuBg').addClass('active');
  });

  $('.mobileCloseBtn').click(function () {
    $('#mobileMenuWrap').removeClass('active');
    $('body').removeClass('mobileNonScroll');
    $('.mobileMenuBg').removeClass('active');
  });

  /* 챗봇 */
  $('#chatbot .chatbotCloseBtn').click(function () {
    $('#chatbot .chatbotInfoText').fadeOut();
  });

  $('#chatbot .chatbotBtn').click(function () {
    $('#chatbot').removeClass('close').addClass('active');
    $(this).attr('aria-expanded', 'true');
  });

  $('#chatbot .chatbotContCloseBtn').click(function () {
    $('#chatbot').addClass('close');
    $('#chatbot').removeClass('active large');

    $('#chatbot .chatbotBtn').attr('aria-expanded', 'false');
  });

  $('#chatbot .chatbotResizeBtn').click(function () {
    $('#chatbot').toggleClass('large');
  });

  /* 팝업 */
  $('#popupWrap .slick').slick({
    autoplay: false,
    arrows: true,
    dots: true,
    accessibility: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 10000,
    speed: 1500,
    prevArrow: $('#popupWrap .controlBox .prevArrowBtn'),
    nextArrow: $('#popupWrap .controlBox .nextArrowBtn'),
  });

  //드롭다운
  $('.toggleBtn').click(function (e) {
    e.stopPropagation();
    $(this).parent().toggleClass('active');

    if ($(this).parent().hasClass('active')) {
      $(this).attr('aria-expanded', 'true');
    } else {
      $(this).attr('aria-expanded', 'false');
    }
  });
  $('.selectCloseBtn').click(function () {
    $(this).parents('.toggleBox').removeClass('active');
    $(this).parents('.toggleBox').find('.toggleBtn').attr('aria-expanded', 'false').focus();
  });

  // 품목 규격 선택 모달 
  $('.itemListBtn').click(function () {
    $('#itemSpecSelectWrap').addClass('active');
  });

  $('#itemSpecSelectWrap .itemSpecModalCloseBtn').click(function () {
    $('#itemSpecSelectWrap').removeClass('active');
  });

    $('.itemListBtn').click(function () {
    $('#itemSpecSelectWrap').addClass('active');
  });

  $('#itemSpecSelectWrap .itemSpecModalCloseBtn').click(function () {
    $('#itemSpecSelectWrap').removeClass('active');
  });

});