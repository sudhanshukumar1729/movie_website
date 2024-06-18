document.addEventListener('DOMContentLoaded', () => {
    const backgroundImages = ['1.png', '2.png', '3.png', '4.png'];
    const movies = document.querySelectorAll('.movie');

    movies.forEach((movie, index) => {
        const backgroundImage = backgroundImages[index % backgroundImages.length];
        movie.style.backgroundImage = `url(${backgroundImage})`;
        movie.style.backgroundSize = 'cover';
        movie.style.backgroundPosition = 'center';
    });
});
