import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContentComponent } from "./content/content.component";
import { MenuComponent } from "./menu/menu.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FilterComponent } from "./filter/filter.component";
import { SharedModule } from "./shared/shared.module";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MoviesComponent } from './movies/movies.component';
import { SongsComponent } from './songs/songs.component';
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    MenuComponent,
    FilterComponent,
    MoviesComponent,
    SongsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
