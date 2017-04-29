$(document).ready(function(){

for(i=0; i<8064; i++){
  $('#screen').append("<div class='pxl'></div>")
}

$('.pxl').mouseenter(function(){
  $(this).css("background-color", "black");
});
$('#casing').click(function(){
  $(this).effect("shake");
  $('.pxl').css('background-color', '#aaa9a5');
});

})
