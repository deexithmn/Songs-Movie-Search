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
import { FilterComponent } from "./shared/filter/filter.component";
import { SharedModule } from "./shared/shared.module";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MoviesComponent } from "./movies/movies.component";
import { SongsComponent } from "./songs/songs.component";
import { PersonComponent } from "./person/person.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { HttpClientModule } from "@angular/common/http";
import { AddpersonComponent } from "./person/addperson/addperson.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    MenuComponent,
    FilterComponent,
    MoviesComponent,
    SongsComponent,
    PersonComponent,
    AddpersonComponent
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
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddpersonComponent],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    MatProgressBarModule
  ]
})
export class AppModule {}
