$(function () {

  //스크롤 그라데이션 
  $('.itemListTabContentListBox').each(function () {
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

  //품목 모달 목록
  $('#itemListWrap .itemSelectBox .itemSelectBtn').click(function () {
    $(this).closest('.itemSelectBox').toggleClass('active');

    $(this).text(
      $(this).closest('.itemSelectBox').hasClass('active')
        ? '내가 버릴 품목 닫기'
        : '내가 버릴 품목 열기'
    );

    $(this).attr(
      'aria-expanded',
      $(this).closest('.itemSelectBox').hasClass('active') ? 'true' : 'false'
    );
  });

});