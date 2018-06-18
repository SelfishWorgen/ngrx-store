import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import "rxjs/add/operator/map";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/do";
import * as FilmActions from "../actions/film.actions";
import { FilmsService } from "../services/films.service";

@Injectable()
export class FilmEffects {
  constructor (
    private actions: Actions,
    private filmsService: FilmsService
  ) {}

  @Effect() add = this.actions
    .ofType("ADD_FILM")
    .delay(3000)
    .map((action: FilmActions.AddFilm) => action.payload)
    .do(payload => {
      this.filmsService.add(payload);
    });
}
