import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MoviesComponent } from "./movies/movies.component";
import { SongsComponent } from "./songs/songs.component";

const routes: Routes = [
  { path: "search-movies", component: MoviesComponent },
  { path: "search-songs", component: SongsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
