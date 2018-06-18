import * as Actions from "./../actions/film.actions";
import { Film } from "../interfaces/film.interface";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { createElementCssSelector } from "@angular/compiler";

const initialState: Film[] = [];

export function FilmsReducer(state: Film[] = initialState, action: Actions.FilmActions) {
  switch (action.type) {
    case Actions.ADD_FILM: {
      let max = 0;
      state.forEach(item => { if (item.id > max) { max = item.id; } });
      action.payload.id = max + 1;
      return [...state, action.payload];
    }
    case Actions.REMOVE_FILM: {
      return [...state.filter(item => item.id !== action.payload)];
    }
    case Actions.RATE_FILM: {
      return [...state.map(item => item.id === action.payload.id && (item.rating = action.payload.rate))];
    }
    default: {
      return state;
    }
  }
}

export const getAverageRating = createFeatureSelector<Film[]>("films");

export const getCalculatedRating = createSelector(getAverageRating, (item) => {

})
