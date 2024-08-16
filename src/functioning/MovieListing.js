import movies from '../data.json';

export default function MovieListing() {
  let shownIndices = [];

  function getRandomIndex(excludeIndices) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * movies.length);
    } while (excludeIndices.includes(randomIndex));
    return randomIndex;
  }

  function getNextMovie() {
    if (shownIndices.length === movies.length) {
      // Reset if all movies have been shown
      shownIndices = [];
    }
    const nextMovieIndex = getRandomIndex(shownIndices);
    shownIndices.push(nextMovieIndex);
    return movies[nextMovieIndex];
  }

  function checkAnswer(movieId, userGuess) {
    const movie = movies.find((m) => m.id === movieId);
    return movie && movie.name.toLowerCase() === userGuess.toLowerCase();
  }

  return { getNextMovie, checkAnswer };
}
