// changes page title when user navigates to another tab or away from page and vice versa
window.onblur = function () { document.title = 'COME BACK!'; }

window.onfocus = function () { document.title = "Tom's Resume"; }

//toggle shaking effect for skill images
        var markup = document.getElementById('markup');
        var scripting = document.getElementById('scripting');
        var frameworks = document.getElementById('frameworks');
               
        function shaking (shaker) {
            shaker.classList.toggle('shake-slow');
            shaker.classList.toggle('shake-constant');
        }
        
// 'help' word in the medical text page hero header turns to red on repeat timeout
var switcher = document.getElementById('changing');

function helpingHand(param) {
    if (param.style.color === 'red') {
        param.style.color = '#fff';
    }
    else {
         param.style.color = 'red';
    }
}

function initiateHelp() {
 setInterval('helpingHand(switcher)',3700)
}

window.onload = initiateHelp;

//prompt box for hiring, and alert
function getHired() {
    var decision = prompt('Thank you for your interest! Are you 100% sure? (yes/no)');
    decision = decision.toLowerCase();
    if (decision ==='yes') {
        alert("Awesome! Let's get going on some projects.")
    }
     else {
         alert("I understand. Maybe next time!");
     }  
}

// jQuery Scroll
$(document).ready(function () {
    $('#btn').on('click', function () {
         $('html, body').animate({
        scrollTop: $('#scroll').offset().top
    }, 1500);
    })
});