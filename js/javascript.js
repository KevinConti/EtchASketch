/*global $, jQuery, alert*/
/*jslint plusplus: true */

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
    $(this).closest('div').css('background-color', 'red');
};

$(document).ready(function () {
    "use strict";
    drawGrid();
    $('.pixel').on('mouseenter', paintColor());
});