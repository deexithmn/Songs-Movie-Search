import { Component, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { Person } from "src/models/person.model";

@Component({
  selector: "ng-addperson",
  templateUrl: "./addperson.component.html",
  styleUrls: ["./addperson.component.scss"]
})
export class AddpersonComponent {
  constructor(
    public dialogRef: MatDialogRef<AddpersonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Person
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
