import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ng-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  @Input() datePickerplaceholder = "";
  @Input() dropDownplaceholder = "";
  @Input() searchBarplaceholder = "";
  constructor() {}

  ngOnInit() {}
  OnFilter(event: Event) {}
}
