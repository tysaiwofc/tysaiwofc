const button = document.getElementById('toggleButton');
const container = document.querySelector('.container');
const music = document.getElementById('backgroundMusic');

button.addEventListener('click', function() {
    container.classList.toggle('parallax-with-rain');
    container.classList.toggle('parallax');


    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});
