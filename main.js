function move_img(x){
  
  // slider_x*(장수-1*너비%)/100
  var sx = (x*300/100);
  $('.sliders')
    .css('marginLeft', -sx + '%');
}

$(function(){
    
    $( "#slider").slider({
      min: 0,
      max: 100,
      value: 0,
      slide: function(e, ui){
        $('.info').text(ui.value);
        move_img(ui.value);
      }
    });
    
  });