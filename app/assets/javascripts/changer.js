$(document).ready(function () {
  // Select Option Values
  var icecreambox = $('#waffleicecream option:selected').val();
  var fruitbox = $('#wafflefruit option:selected').val();
  var meatbox = $('#wafflemeat option:selected').val();
  var nutbox = $('#wafflenut option:selected').val();

  //Ingredient Holders
  var waffleicecreamholder = $('#waffle-ice-cream-holder');
  var wafflefruitholder = $('#waffle-fruit-holder');
  var wafflemeatholder = $('#waffle-meat-holder');
  var wafflenutholder = $('#waffle-nut-holder');

  // Ingredient List
  var nameicecream = $('.icecream-name').text().trim();
  var namefruit = $('.fruit-name').text().trim();
  var namemeat = $('.meat-name').text().trim();
  var namenut = $('.nut-name').text().trim();

  if(icecreambox === 'Corn Flakes' || nameicecream === 'Corn Flakes') {
    $(waffleicecreamholder).addClass('ice-cream-cornflakes');
  }

  // Fruits
  if(fruitbox === 'Banana' || namefruit === 'Banana') {
    wafflefruitholder.addClass('fruit-banana');
  } else if(fruitbox === 'Apple' || namefruit === 'Apple') {
    wafflefruitholder.addClass('fruit-apple');
  } else if(fruitbox === 'Orange' || namefruit === 'Orange') {
    wafflefruitholder.addClass('fruit-orange');
  } else if(fruitbox === 'Mango' || namefruit === 'Mango') {
    wafflefruitholder.addClass('fruit-mango');
  } else if(fruitbox === 'Kiwi' || namefruit === 'Kiwi') {
    wafflefruitholder.addClass('fruit-kiwi');
  } else if(fruitbox === 'Peach' || namefruit === 'Peach') {
    wafflefruitholder.addClass('fruit-peach');
  }

  // Meats
  if(meatbox === 'Bacon Strips' || namemeat === 'Bacon Strips') {
    wafflemeatholder.addClass('meat-bacon-strips');
  } else if(meatbox === 'Bacon Bits' || namemeat === 'Bacon Bits') {
    wafflemeatholder.addClass('meat-bacon-bits');
  } else if(meatbox === 'Fried Chicken Skin' || namemeat === 'Fried Chicken Skin') {
    wafflemeatholder.addClass('meat-chicken-skin');
  }

  // Nuts
  if(nutbox === 'Peanut' || namenut === 'Peanut') {
    wafflenutholder.addClass('nut-peanut');
  } else if(nutbox === 'Almond' || namenut === 'Almond') {
    wafflenutholder.addClass('nut-almond');
  } else if(nutbox === 'Walnut' || namenut === 'Walnut') {
    wafflenutholder.addClass('nut-walnut');
  } else if(nutbox === 'Cashew' || namenut === 'Cashew') {
    wafflenutholder.addClass('nut-cashew');
  }

  
});