$(document).ready(function () {
    $('#btn').on('click', function () {
         $('html, body').animate({
        scrollTop: $('#scroll').offset().top
    }, 1500);
    })
});

window.onblur = function () { document.title = 'COME BACK!'; }

window.onfocus = function () { document.title = "Tom's Resume"; }
