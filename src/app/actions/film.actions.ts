import { Action } from "@ngrx/store";
import { Film } from "../interfaces/film.interface";

export const ADD_FILM = "[FILM] Add";
export const REMOVE_FILM = "[FILM] Remove";
export const RATE_FILM = "[FILM] Rate";

export class AddFilm implements Action {
  readonly type = ADD_FILM;

  constructor(public payload: Film) {}
}

export class RemoveFilm implements Action {
  readonly type = REMOVE_FILM;

  constructor(public payload: number) {}
}

export class RateFilm implements Action {
  readonly type = RATE_FILM;

  constructor(public payload: { id: number; rate: number }) {}
}

export type FilmActions = AddFilm | RemoveFilm | RateFilm;

