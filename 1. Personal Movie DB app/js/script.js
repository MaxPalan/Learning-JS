"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,

  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },

  rememberMyFilms: function() {
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
  },

  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классическй зритель');
    }
    else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    }
    else {
      console.log('Произошла ошибка');
    }
  },

  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    }
    else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGenres: function() {
    for (let i = 1; i < 2; i++) {
      let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();

      if (genres === null || genres === '') {
        console.log('Вы ввели некорректные данные или не ввели их вовсе');
        i--;
      }
      else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();