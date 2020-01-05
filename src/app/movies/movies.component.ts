import { Component, OnInit } from "@angular/core";
import { Movie } from "src/models/movie.model";

@Component({
  selector: "ng-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"]
})
export class MoviesComponent implements OnInit {
  constructor() {}
  movies: Movie[] = [];
  ngOnInit() {}
}
