$(document).ready(function () {
  function mobileNav() {
    $('.burger').on('click', function () {
      if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $('.navigation').removeClass('open');
        $('body').removeClass('ov-hidden');
      } else {
        $(this).addClass('open');
        $('.navigation').addClass('open');
        $('body').addClass('ov-hidden');
      }
    });
  }
  mobileNav();

  $('.main-icon').on('click', function(event) {
    event.preventDefault();
    const sc = $(this).attr("href");
    const dn = $(sc).offset().top;
    $('html, body').animate({scrollTop: dn}, 500);
  });

  const heightText = $('.card-descriptions__text-shell').height();
  const CONST_HEIGHT = 80;
  const more = $('.card-descriptions__more');

  $('.card-actions .see-more').each(function (e) {
    $(this).on('click', function (e) {
      e.preventDefault();

      if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).text('See More Info');
        $(this).closest('.card').removeClass('open');

        $('.card-descriptions__text').css('max-height', '100%');
        $('.card-descriptions__more').removeClass('show');

        $(this).closest('.card').find('.card-descriptions-wrapper').removeClass('card-descriptions-wrapper--show');
        $(this).closest('.card').find('.lists').removeClass('lists--show');
      } else {
        // delete for all
        const lessBtn = $('.card-actions .see-more');
        lessBtn.text('See More Info');
        lessBtn.removeClass('open');
        $('.card').removeClass('open');
        $('.card-descriptions-wrapper').removeClass('card-descriptions-wrapper--show');
        $('.lists').removeClass('lists--show');
        $('.card-descriptions__more').removeClass('show');

        $('.card-descriptions__text').css('max-height', '80px');
        if ($(this).closest('.card').find('.card-descriptions__text-shell').height() > CONST_HEIGHT) {
          $('.card-descriptions__more').addClass('show');
        }

        // delete for current
        $(this).addClass('open');
        $(this).text('See Less Info');
        $(this).closest('.card').addClass('open');
        $(this).closest('.card').find('.card-descriptions-wrapper').addClass('card-descriptions-wrapper--show');
        $(this).closest('.card').find('.lists').addClass('lists--show');
      }
    })
  });

  more.on('click', function () {
    $(this).prev('.card-descriptions__text').css('max-height', '100%');
    $('.card-descriptions__more').removeClass('show');
  });

  // const selectFlower = [
  //   {
  //     id: 0,
  //     text: '<div class="select-info"><span class="select-info__cost">$20</span><span class="select-info__value">1 Gram</span></div>',
  //     html: '<div class="select-info"><span class="select-info__cost">$20</span><span class="select-info__value">1 Gram</span></div>',
  //     title: 'first'
  //   }, {
  //     id: 1,
  //     text: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
  //     html: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
  //     title: 'second'
  //   }, {
  //     id: 2,
  //     text: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
  //     html: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
  //     title: 'third'
  //   }, {
  //     id: 3,
  //     text: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
  //     html: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
  //     title: 'fourth'
  //   }, {
  //     id: 4,
  //     text: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
  //     html: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
  //     title: 'fifth'
  //   }
  // ];
  //
  // const selectEdible = [
  //   {
  //     id: 0,
  //     text: '<div class="select-info"><span class="select-info__cost">$20</span><span class="select-info__value">1 Each</span></div>',
  //     html: '<div class="select-info"><span class="select-info__cost">$20</span><span class="select-info__value">1 Each</span></div>',
  //     title: 'first'
  //   }
  // ];
  //
  // const selectVape = [
  //   {
  //     id: 0,
  //     text: '<div class="select-info"><span class="select-info__cost">$20</span><span class="select-info__value">1 Gram</span></div>',
  //     html: '<div class="select-info"><span class="select-info__cost">$20</span><span class="select-info__value">1 Gram</span></div>',
  //     title: 'first'
  //   }, {
  //     id: 1,
  //     text: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
  //     html: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
  //     title: 'second'
  //   }
  // ];

  // $(".card-select--flower").select2({
  //   minimumResultsForSearch: -1,
  //   data: selectFlower,
  //   escapeMarkup: function(markup) {
  //     return markup;
  //   },
  //   templateResult: function(data) {
  //     return data.html;
  //   },
  //   templateSelection: function(data) {
  //     return data.text;
  //   }
  // });
  //
  // $(".card-select--edible").select2({
  //   minimumResultsForSearch: -1,
  //   data: selectEdible,
  //   escapeMarkup: function(markup) {
  //     return markup;
  //   },
  //   templateResult: function(data) {
  //     return data.html;
  //   },
  //   templateSelection: function(data) {
  //     return data.text;
  //   }
  // });
  //
  // $(".card-select--vape").select2({
  //   minimumResultsForSearch: -1,
  //   data: selectVape,
  //   escapeMarkup: function(markup) {
  //     return markup;
  //   },
  //   templateResult: function(data) {
  //     return data.html;
  //   },
  //   templateSelection: function(data) {
  //     return data.text;
  //   }
  // });

});
