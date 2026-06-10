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

  $('.itemSelectBtn').click(function () {
    $(this).closest('.itemSelectBox').toggleClass('active');
  });

});