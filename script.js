document.addEventListener('DOMContentLoaded', () => {
    const movieInput = document.getElementById('movie-input');
    const recommendBtn = document.getElementById('recommend-btn');
    const recommendationsContainer = document.getElementById('recommendations');

    const movies = [
        { title: 'The Matrix', genre: 'Sci-Fi', director: 'Lana Wachowski, Lilly Wachowski' },
        { title: 'Inception', genre: 'Sci-Fi', director: 'Christopher Nolan' },
        { title: 'Interstellar', genre: 'Sci-Fi', director: 'Christopher Nolan' },
        { title: 'The Godfather', genre: 'Crime', director: 'Francis Ford Coppola' },
        { title: 'The Dark Knight', genre: 'Action', director: 'Christopher Nolan' },
        { title: 'Pulp Fiction', genre: 'Crime', director: 'Quentin Tarantino' },
        { title: 'The Shawshank Redemption', genre: 'Drama', director: 'Frank Darabont' },
        { title: 'Forrest Gump', genre: 'Drama', director: 'Robert Zemeckis' },
        { title: 'Gladiator', genre: 'Action', director: 'Ridley Scott' },
        { title: 'Fight Club', genre: 'Drama', director: 'David Fincher' }
    ];

    function recommendMovies(likedMovie) {
        const likedMovieDetails = movies.find(movie => movie.title.toLowerCase() === likedMovie.toLowerCase());
        if (!likedMovieDetails) {
            alert('Movie not found in the database. Please try another movie.');
            return;
        }

        const recommendations = movies.filter(movie => {
            return movie.genre === likedMovieDetails.genre && movie.title.toLowerCase() !== likedMovie.toLowerCase();
        });

        displayRecommendations(recommendations);
    }

    function displayRecommendations(recommendations) {
        recommendationsContainer.innerHTML = '';

        if (recommendations.length === 0) {
            recommendationsContainer.innerHTML = '<div class="movie">No recommendations found.</div>';
            return;
        }

        recommendations.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.className = 'movie';
            movieElement.textContent = `${movie.title} - ${movie.genre} - Directed by ${movie.director}`;
            recommendationsContainer.appendChild(movieElement);
        });
    }

    recommendBtn.addEventListener('click', () => {
        const likedMovie = movieInput.value.trim();
        if (likedMovie) {
            recommendMovies(likedMovie);
        } else {
            alert('Please enter a movie you like.');
        }
    });
});
