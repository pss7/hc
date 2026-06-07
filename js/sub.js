$(function () {

  //개인정보 동의
  $('.formAgreeBtn').click(function () {
    $('.formAgreeBtn').removeClass('active');
    $(this).addClass('active');
  });

  $('.formSection .formDetailBtn').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $(this)
        .attr('aria-expanded', 'true')
        .text('자세히 닫기');

      $('.formSection .formAgreeInfoBox .formAgreeSummary').hide();
      $('.formSection .formAgreeInfoBox .formAgreeDetail').slideDown();
    } else {
      $(this)
        .attr('aria-expanded', 'false')
        .text('자세히 보기');

      $('.formSection .formAgreeInfoBox .formAgreeSummary').show();
      $('.formSection .formAgreeInfoBox .formAgreeDetail').slideUp();
    }
  });

  //선택 목록
  $('.formSelectBtnList li .formSelectBtn').click(function () {
    $(this).closest('.formSelectBtnList').find('.formSelectBtn').removeClass('active');
    $(this).addClass('active');
  });

  //복사
  $('.formDetailInfoCopyBtn').click(function (e) {
    e.preventDefault();
    navigator.clipboard.writeText(
      $(this).prev('.formAccountNumber').text()
    );
    alert('복사되었습니다.');
  });

  //자주 묻는 질문
  $('.faqList li .faqQuestionBtn').click(function () {
    if ($(this).hasClass('active')) {
      $(this)
        .removeClass('active')
        .attr('aria-expanded', 'false')
        .next()
        .slideUp();
    } else {
      $(this)
        .addClass('active')
        .attr('aria-expanded', 'true')
        .next()
        .slideDown();
    }
  });




});