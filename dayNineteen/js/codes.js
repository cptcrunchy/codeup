var konami = [38, 38, 40, 0, 37, 39, 37, 39, 66, 65, 13];
var pressed = [];

$(document).ready(function() {
    $(this).keydown(function cheatCode(e) {
        pressed.push(e.keyCode);
        if (pressed.toString().indexOf(konami) >= 0) {
            $(document).unbind('keydown', cheatCode);
            window.location.href = 'galaga.html';
        }

    });

    $('button').keydown(function(e) {
        var btnPress = $(this).attr('data-key');
        $('button[data-key= ' + btnPress + ']').addClass('dpad-clicked');
    });


});