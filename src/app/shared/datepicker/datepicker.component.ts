import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ng-datepicker",
  templateUrl: "./datepicker.component.html",
  styleUrls: ["./datepicker.component.scss"]
})
export class DatepickerComponent implements OnInit {
  @Input() placeholder = "";
  constructor() {}

  ngOnInit() {}
}
