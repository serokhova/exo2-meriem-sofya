import { Injectable } from '@angular/core';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private films: Film[] = [
    { titleFilm: 'Trainspotting', posterFilm: '/posterFilm/Trainspotting.jpg' },
    { titleFilm: 'Point Break', posterFilm: '/posterFilm/PointBreak.jpg' },
    { titleFilm: "Adam's Apples", posterFilm: '/posterFilm/AdamsApples.jpg' },
    { titleFilm: 'Wag The Dog', posterFilm: '/posterFilm/WagTheDog.jpg' },
    { titleFilm: 'The Lobster', posterFilm: '/posterFilm/TheLobster.jpg' },
  ];

  getFilmList(): Film[] {
    return this.films;
  }

  getFilmByTitle(titleFilm: string): Film | undefined {
    return this.films.find((film) => film.titleFilm === titleFilm);
  }
}
