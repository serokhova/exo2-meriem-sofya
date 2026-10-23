import { Component, inject } from '@angular/core';
import { Film } from '../../models/film';
import { FilmService } from '../../services/film.service';

@Component({
  imports: [],
  selector: 'app-list',
  styleUrl: './list.scss',
  templateUrl: './list.html',
})
export class List {
  private readonly filmService = inject(FilmService);

  films: Film[] = this.filmService.getFilmList();
  selectedFilm?: Film = this.films[0];

  openDetailsFilm(title: string): void {
    this.selectedFilm = this.filmService.getFilmByTitle(title);
  }
}
