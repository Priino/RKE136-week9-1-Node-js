const movieTitle = document.querySelector('.movie-title');
const releaseDate = document.querySelector('.release-date');
const movieGenres = document.querySelector('.genres');
const movieDuration = document.querySelector('.movie-duration');
const moviePoster = document.querySelector('.movie-poster-container img');
const movieQuote = document.querySelector('.movie-info-quote');
const movieOverview = document.querySelector('.movie-info-overview');
const footerYear = document.querySelector('.year');

window.onload = () => {
    let url = 'https://api.themoviedb.org/3/movie/926393?api_key=cbb62466eec5c24338dc17a91eb02bc4';
    fetch(url)
    .then(response => {
        return response.json();
    })

    .then(data => {
        movieTitle.textContent = data.title;

        let date = new Date(data.release_date);
        releaseDate.textContent = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}. ${data.production_countries[0].iso_3166_1}, ${data.production_countries[1].iso_3166_1}.`;

        let genresToDisplay = '';
        data.genres.forEach(genre => {
            genresToDisplay = genresToDisplay + `${genre.name}, `;
        });
        let genresUpdated = genresToDisplay.slice(0, -2) + '.';

        movieGenres.textContent = genresUpdated;
        movieDuration.textContent = `${data.runtime} minutes.`;

        let posterUrl = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`;
        moviePoster.src = posterUrl;
        moviePoster.alt = `${data.title} poster`;

        movieQuote.textContent = `${data.tagline}.`;

        movieOverview.textContent = data.overview;

        let currentYear = new Date().getFullYear();
        footerYear.textContent = currentYear
    });
}