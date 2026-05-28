$(function () {

  // 품목 규격 선택 모달 
  $('#itemListWrap .itemListBtn').click(function () {
    $('#itemSpecSelectWrap').addClass('active');
  });

  $('#itemSpecSelectWrap .itemSpecModalCloseBtn').click(function () {
    $('#itemSpecSelectWrap').removeClass('active');
  });

});