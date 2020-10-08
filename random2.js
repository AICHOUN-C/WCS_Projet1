let sources = ['allemagne', 'france', 'angleterre', 'belgique', 'espagne', 'portugal', 'paysBas'];
let randomLink = document.getElementById('random-country');
let randomLinkBurger = document.getElementById('random-country-burger');

randomLink.addEventListener('click', function (event) {
    randomCountry();
} );
randomLinkBurger.addEventListener('click', function (event) {
    randomCountry();
} );

function randomCountry () {
    location.href = 'countries/' + sources[Math.floor (Math.random()* (sources.length -1))] + '.html';
}
