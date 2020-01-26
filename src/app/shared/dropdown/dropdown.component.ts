import { Component, OnInit, Input } from "@angular/core";
import { DropdownModel } from "src/models/dropdown.model";
@Component({
  selector: "ng-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"]
})
export class DropdownComponent implements OnInit {
  @Input() placeholder = "";
  constructor() {}
  @Input()
  dropdownObj: DropdownModel[] = [];
  ngOnInit() {}
}
