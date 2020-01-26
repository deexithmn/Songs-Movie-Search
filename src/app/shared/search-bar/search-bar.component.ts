import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "ng-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
  constructor() {}
  value = "";
  @Input() placeholder = "";
  @Output() searchValue: EventEmitter<string> = new EventEmitter();

  ngOnInit() {}

  onFilter() {
    this.searchValue.emit(this.value);
  }
}
