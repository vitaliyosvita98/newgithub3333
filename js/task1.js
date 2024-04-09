const movies = {
  action: ['Die Hard', 'John Wick', 'The Matrix'],
  comedy: ['The Hangover', 'Bridesmaids', 'Step Brothers'],
  drama: ['The Shawshank Redemption', 'The Godfather', "Schindler's List"],
  horror: ['The Shining', 'A Nightmare on Elm Street', 'The Exorcist'],

  // Метод, який виводить список фільмів в заданому жанрі
  listMoviesByGenre: function (genre, films) {
    for(const value in films) {
      if(value === genre) {
        console.log(films[value]);
      }
      else {
        console.log("Не має такого жанру");
      }
    }
  },
}

movies.listMoviesByGenre('horror', movies);