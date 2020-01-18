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

  const selectFlower = [
    {
      id: 0,
      text: '<div class="select-info"><span class="select-info__cost">$20</span><span class="select-info__value">1 Gram</span></div>',
      html: '<div class="select-info"><span class="select-info__cost">$20</span><span class="select-info__value">1 Gram</span></div>',
      title: 'first'
    }, {
      id: 1,
      text: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
      html: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
      title: 'second'
    }, {
      id: 2,
      text: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
      html: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
      title: 'third'
    }, {
      id: 3,
      text: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
      html: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
      title: 'fourth'
    }, {
      id: 4,
      text: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
      html: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
      title: 'fifth'
    }
  ];

  const selectEdible = [
    {
      id: 0,
      text: '<div class="select-info"><span class="select-info__cost">$20</span><span class="select-info__value">1 Each</span></div>',
      html: '<div class="select-info"><span class="select-info__cost">$20</span><span class="select-info__value">1 Each</span></div>',
      title: 'first'
    }
  ];

  const selectVape = [
    {
      id: 0,
      text: '<div class="select-info"><span class="select-info__cost">$20</span><span class="select-info__value">1 Gram</span></div>',
      html: '<div class="select-info"><span class="select-info__cost">$20</span><span class="select-info__value">1 Gram</span></div>',
      title: 'first'
    }, {
      id: 1,
      text: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
      html: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Gram</span></div>',
      title: 'second'
    }
  ];

  $(".card-select--flower").select2({
    minimumResultsForSearch: -1,
    data: selectFlower,
    escapeMarkup: function(markup) {
      return markup;
    },
    // templateResult: function(data) {
    //   return data.html;
    // },
    // templateSelection: function(data) {
    //   return data.text;
    // }
  });

  $(".card-select--edible").select2({
    minimumResultsForSearch: -1,
    data: selectEdible,
    escapeMarkup: function(markup) {
      return markup;
    },
    templateResult: function(data) {
      return data.html;
    },
    templateSelection: function(data) {
      return data.text;
    }
  });

  $(".card-select--vape").select2({
    minimumResultsForSearch: -1,
    data: selectVape,
    escapeMarkup: function(markup) {
      return markup;
    },
    templateResult: function(data) {
      return data.html;
    },
    templateSelection: function(data) {
      return data.text;
    }
  });

  $('.card-actions .see-more').each(function (e) {
    $(this).on('click', function (e) {
      e.preventDefault();

      if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).text('See More Info');
        $(this).closest('.card').removeClass('open');
      } else {
        // delete for all
        const lessBtn = $('.card-actions .see-more');
        lessBtn.text('See More Info');
        lessBtn.removeClass('open');
        $('.card').removeClass('open');

        // delete for current
        $(this).addClass('open');
        $(this).text('See Less Info');
        $(this).closest('.card').addClass('open');
      }
    })
  });

  const cardModal = $('#cardModal');

  cardModal.on('shown.bs.modal', function (event) {
    let modal = $(this);
    let button = $(event.relatedTarget);
    let text = button.data('text');
    /*lists*/
    let lists = button.closest('.card.open').find('.lists').clone();
    lists.addClass('show');
    modal.find('.modal-lists').html(lists);
    lists.find('*').addClass('show');
    /*lists*/
    modal.find('.card-descriptions__title').addClass('show');
    modal.find('.card-descriptions__text').addClass('show').text(text);
  });

  cardModal.on('hidden.bs.modal', function () {
    const lessBtn = $('.card-actions .see-more');
    lessBtn.text('See More Info');
    lessBtn.removeClass('open');
    $('.card').removeClass('open');
    $(this).find('.modal-body .card-descriptions__title').removeClass('show');
    $(this).find('.modal-body .card-descriptions__text').removeClass('show').text('');
    $(this).find('.lists').removeClass('show').text('');
    $(this).find('.lists *').removeClass('show');
  });
});
