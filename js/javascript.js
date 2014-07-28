/*global $, jQuery, alert*/
/*jslint plusplus: true */

//Draws the grid as a 16 x 16 set of divs
var drawGrid = function () {
    "use strict";
    var i, j;
    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            $('.container').append('<div class="pixel"></div>');
        }
        $('.container').append('</br>');
    }
};

var paintColor = function () {
    "use strict";
    var dropdown = document.getElementById("dropdown");
    var colorToPaint = dropdown.options[dropdown.selectedIndex].text;
    $(this).closest('div').css('background-color', colorToPaint);
};

var resetGrid = function () {
    "use strict";
    $(".pixel").css("background", "white");
};
$(document).ready(function () {
    "use strict";
    drawGrid();
    $('.pixel').mouseenter(paintColor);
    $('#reset').on('click', resetGrid);
});