$(function () {

  //개인정보 동의
  $('.formAgreeBtn').click(function () {
    $('.formAgreeBtn').removeClass('active');
    $(this).addClass('active');
  });

  $('.formSection .formDetailBtn').click(function () {
    $('.formDetailBtn').toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).text('자세히 닫기');
      $('.formSection .formAgreeInfoBox .formAgreeSummary').hide();
      $('.formSection .formAgreeInfoBox .formAgreeDetail').slideDown();
    } else {
      $(this).text('자세히 보기');
      $('.formSection .formAgreeInfoBox .formAgreeSummary').show();
      $('.formSection .formAgreeInfoBox .formAgreeDetail').slideUp();
    }





  });

  //선택 목록
  $('.formSelectBtnList li .formSelectBtn').click(function () {
    $(this).closest('.formSelectBtnList').find('.formSelectBtn').removeClass('active');
    $(this).addClass('active');
  });



});