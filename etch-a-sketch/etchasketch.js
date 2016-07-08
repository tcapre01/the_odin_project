$(document).ready(function(){
  
$('#clear').on('click', function(){
  var size = +prompt("Select an integer between 1 - 180 for new size", 32);
  var newRow= "<div class='row'></div>";
  var newSquare = "<div class='square'></div>";
  var newGrid = 960/size;
  
$(".row").remove();
  
for (i = 0; i<size; i++){
       $("#container").append(newRow);
    };
for (j=0; j<size; j++){
          $(".row").append(newSquare);
    };
  
$(".square").css({'height': newGrid+'px', 'width': newGrid+'px'});
  
}); 

$("#container").on("mouseenter", ".square", function(){
  $(this).addClass('color');
});
  
function color(){
  return Math.floor(Math.random()*(266));};   
  
$('#color').on('click',function(){
$("#container").on("mouseenter", ".square", function(){

  $(this).toggleClass('color');
  $(this).css('background-color', "rgb("+color()+","+color()+","+color()+")")
});
})
  

});