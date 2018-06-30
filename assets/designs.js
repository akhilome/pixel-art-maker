// Get the canvas
let canvas = $('#pixel-canvas');

/**
 * @description Clears any existing grid on the page and create new one based off of user specified grid height and width
 */
function makeGrid() {
  canvas.html('');

  let height = Number($('#input-height').val());
  let width = Number($('#input-width').val());

  for (let i = 0; i < height; ++i) {
    canvas.prepend('<tr></tr>');
    for (let j = 0; j < width; ++j) {
      canvas.children().first().append('<td></td>');
    }
  }
}

// Listen for clicks to the submit button and create new grid
$('#size-picker').submit(function(e) {
  e.preventDefault();
  makeGrid();
});

// Get user specified color
let color = $('#color-picker').val();

// Listen for color changes and reassign accordingly
$('#color-picker').change(function() {
  color = $(this).val();
});

// Set the background color for a cell on user clicking the cell
canvas.on('click', 'td', function(e) {
  e.preventDefault();
  $(this).css('background-color', color);
});
