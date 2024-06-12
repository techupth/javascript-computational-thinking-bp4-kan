let movie = [
  {
    title: "The Shawshank Redemtion",
    releaseDate: "1994-10-14",
    genre: "Drama",
  },
  {
    title: "The Godfather",
    releaseDate: "1972-03-24",
    genre: "Crime",
  },
  {
    title: "The Godfather:Part II",
    releaseDate: "1974-12-20",
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    releaseDate: "2008-07-16",
    genre: "Action",
  },
  {
    title: "Pulp Fiction",
    releaseDate: "1994-10-14",
    genre: "Crime",
  },
];
function findMovie(year) {
  let movieInThisYear = [];
  for (let movieObj of movie) {
    if ((movieObj.releaseDate).includes(year)){
      movieInThisYear.push(movieObj);
    }
  }
  return movieInThisYear;
}
console.log(findMovie(1994));
