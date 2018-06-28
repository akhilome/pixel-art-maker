// Get user specified grid size
let gridHeight = Number($('#input-height').val());
let gridWidth = Number($('#input-width').val());

// Monitor input fields for changes
$('#input-height').change(function() { 
  gridHeight = Number($(this).val());
});

$('#input-width').change(function() {
  gridWidth = Number($(this).val());
});

// Get the canvas
let canvas = $('#pixel-canvas');

// Create the new grid when called
function makeGrid() {
  // Clear current Grid
  canvas.html('');

  // Draw new grid
  for (let i = 0; i < gridHeight; ++i) {
    canvas.prepend('<tr></tr>');
    for (let j = 0; j < gridWidth; ++j) {
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
