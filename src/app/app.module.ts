import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { FilmsReducer } from "./reducers/films.reducer";
import { ListItemComponent } from "./components/list-item/list-item.component";
import { ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { FilmEffects } from "./effects/FilmEffects";
import { FilmsService } from "./services/films.service";


@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      films: FilmsReducer
    }),
    EffectsModule.forRoot([
      FilmEffects
    ])
  ],
  providers: [FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
