import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MoviesComponent } from "./movies/movies.component";
import { SongsComponent } from "./songs/songs.component";
import { NoContentComponent } from "./shared/no-content/no-content.component";
import { AppComponent } from "./app.component";
import { PersonComponent } from "./person/person.component";

const routes: Routes = [
  { path: "person", component: PersonComponent },
  { path: "search-movies", component: MoviesComponent },
  { path: "search-songs", component: SongsComponent },
  { path: "**", component: NoContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
