$(function () {

  // 품목 규격 선택 모달 
  $('#itemListWrap .itemListBtn').click(function () {
    $('#itemSpecSelectWrap').addClass('active');
  });

  $('#itemSpecSelectWrap .itemSpecModalCloseBtn').click(function () {
    $('#itemSpecSelectWrap').removeClass('active');
  });

  //스크롤 그라데이션 
  $('.itemListTabContentList').each(function () {
    const $w = $(this);

    $w.scroll(function () {
      const st = $w.scrollTop();
      const h = $w.innerHeight();
      const sh = this.scrollHeight;

      if (sh > h + 1) {
        $w.addClass('hasScroll')
          .toggleClass('scrollEnd', st + h >= sh - 5);
      } else {
        $w.removeClass('hasScroll scrollEnd');
      }
    }).trigger('scroll');
  });

});