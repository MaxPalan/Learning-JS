"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// let i = 0;
// do {
//   const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
//         rating = prompt('На сколько оцените его?', '');

//   if (lastFilm != null && rating != null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
//     personalMovieDB.movies[lastFilm] = rating;
//     console.log('done');
//     i++;
//   }
//   else {
//     console.log('error');
//   }
// } while (i < 2);

// let i = 0;
// while (i < 2) {
//   const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
//         rating = prompt('На сколько оцените его?', '');

//   if (lastFilm != null && rating != null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
//     personalMovieDB.movies[lastFilm] = rating;
//     console.log('done');
//     i++;
//   }
//   else {
//     console.log('error');
//   }
// }

for (let i = 0; i < 2; i++) {
  const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
        rating = prompt('На сколько оцените его?', '');

  if (lastFilm != null && rating != null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
    personalMovieDB.movies[lastFilm] = rating;
    console.log('done');
  }
  else {
    console.log('error');
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
}
else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
  console.log('Вы классическй зритель');
}
else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман');
}
else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB);