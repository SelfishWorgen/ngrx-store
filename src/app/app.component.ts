import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./app.state";
import { Observable } from "rxjs/Observable";
import { Film } from "./interfaces/film.interface";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as FilmActions from "./actions/film.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  films: Observable<Film[]>;
  showAdd = false;
  newFilm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.films = store.select("films");
    this.newFilm = this.fb.group({
      name: ["", [Validators.required]],
      description: [""]
    });
  }

  openAdd(): void {
    this.showAdd = true;
    this.newFilm.reset({
      name: "",
      description: ""
    });
  }

  closePopup(): void {
    this.showAdd = false;
  }

  confirm(): void {
    this.store.dispatch(new FilmActions.AddFilm(this.newFilm.value));
    this.showAdd = false;
  }

  trackByFn(index: number, item: Film): number {
    return item.id;
  }

  onRate(event: string, id: number): void {
    this.store.dispatch(new FilmActions.RateFilm({ id, rate: +event }));
  }
}
