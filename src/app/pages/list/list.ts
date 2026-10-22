import { Component } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { Film } from '../../models/film';

@Component({
  imports: [],
  selector: 'app-list',
  styleUrl: './list.scss',
  templateUrl: './list.html',
})
export class List {
  films: Film[];
  selectedFilm?: Film;

  constructor(private filmService: FilmService) {
    this.films = this.filmService.getFilmList();
    this.selectedFilm = this.films[0];
  }

  openDetailsFilm(title: string): void {
    this.selectedFilm = this.filmService.getFilmByTitle(title);
  }
}