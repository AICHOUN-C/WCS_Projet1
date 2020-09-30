let sources = ['allemagne', 'france', 'belgique', 'espagne', 'portugal', 'paysBas'];
let randomLink = document.getElementById('random-country');

randomLink.addEventListener('click', function (event) {
    // event.preventDefault();
    randomCountry();
} );

function randomCountry () {
    console.log('from randomCountry');
    location.href = 'countries/' + sources[Math.floor (Math.random()* (sources.length -1))] + '.html';
}