$(function() {
  $.each(['white', 'yellow', 'orange', 'red', 'magenta', 'purple', 'blue', 'cyan', 'green', 'darkgreen', 'brown', 'tan', 'lightgrey', '#808080', 'darkgrey', 'black'], function() {
    $('#tools #colors').append("<a href='#' class='color' data-color='" + this + "' style='background: " + this + ";'></a> ");
  });
});
