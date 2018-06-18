import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Film } from "../interfaces/film.interface";
import "rxjs/add/observable/of";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import * as FilmActions from "../actions/film.actions";

@Injectable()
export class FilmsService {
  constructor(
    private store: Store<AppState>
  ) {}

  add(film: { name: string; description?: string; }): void {
    this.store.dispatch(new FilmActions.AddFilm(film));
  }

  emulate(): Observable<any> {
    return new Observable(resolver => {
      resolver.next();
    });
  }
}
