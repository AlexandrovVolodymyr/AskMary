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
    })
  }
  mobileNav();

  $('.main-icon').on('click', function(event) {
    event.preventDefault();
    const sc = $(this).attr("href");
    const dn = $(sc).offset().top;
    $('html, body').animate({scrollTop: dn}, 500);
  });

  var selectFlower = [
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

  var selectEdible = [
    {
      id: 0,
      text: '<div class="select-info"><span class="select-info__cost">$20</span><span class="select-info__value">1 Each</span></div>',
      html: '<div class="select-info"><span class="select-info__cost">$20</span><span class="select-info__value">1 Each</span></div>',
      title: 'first'
    }, {
      id: 1,
      text: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Each</span></div>',
      html: '<div class="select-info"><span class="select-info__cost">$40</span><span class="select-info__value">2 Each</span></div>',
      title: 'second'
    }
  ];

  var selectVape = [
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
    templateResult: function(data) {
      return data.html;
    },
    templateSelection: function(data) {
      return data.text;
    }
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
});
