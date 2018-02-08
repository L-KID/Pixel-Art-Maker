// Select color input

// Select size input

// When size is submitted by the user, call makeGrid()
$('#submitButton').click(function (event){
  event.preventDefault();
  makeGrid();
});

$('table').on('click', 'td', function (){
  var currColor = $(this).css('background-color');
  //console.log(currColor);
  if (currColor !== "rgba(0, 0, 0, 0)"){
    $(this).css('background-color', 'rgba(0, 0, 0, 0)');
  }else{
    var color = $('#colorPicker').val();
    $(this).css('background-color', color);
  }
});

//Generate NxM grid
function makeGrid() {
  $('table').children().remove();
  var row = $('#inputHeight').val();
  var col = $('#inputWeight').val();
  for (var i = 0; i < row; i++){
    $('table').append('<tr></tr>');
    for (var j = 0; j < col; j++){
      $('table').children().last().append('<td></td>');
    }
  }

}
