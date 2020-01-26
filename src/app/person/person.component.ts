import { Component, OnInit } from "@angular/core";
import { Person } from "src/models/person.model";
import { PersonService } from "../services/person.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { AddpersonComponent } from "./addperson/addperson.component";
import * as _ from "lodash";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.scss"]
})
export class PersonComponent implements OnInit {
  person: Person[] = [];
  loaded = false;
  newPerson: Person = {
    name: ""
  };
  constructor(private personService: PersonService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getAllPerson();
  }
  getAllPerson() {
    // call the servie to fetch the info
    console.log("Getting all users");
    this.personService.getAllUser().subscribe((data: Person[]) => {
      this.person = data;
      this.loaded = true;
    });
  }
  updatePerson(index: number, person: Person) {
    // call the service to update info
    this.openDialog(person).subscribe(result => {
      console.log(result);
      if (_.isEmpty(result)) {
        this.loaded = true;
      } else {
        this.loaded = false;
        this.personService.updateUser(index, result).subscribe(() => {
          this.getAllPerson();
        });
      }
    });
  }
  deletePerson(index) {
    // call the service to delete the info
    console.log("Deleting the a user");
    this.personService.deleteUser(index).subscribe(data => {
      this.getAllPerson();
    });
  }

  addNewUser() {
    this.openDialog(this.newPerson).subscribe(result => {
      if (_.isEmpty(result)) {
        this.loaded = true;
      } else {
        this.loaded = false;
        this.personService.addNewUser(result).subscribe(() => {
          this.getAllPerson();
        });
      }
    });
  }
  openDialog(person: Person) {
    const dialogRef = this.dialog.open(AddpersonComponent, {
      width: "250px",
      data: person
    });

    return dialogRef.afterClosed();
  }
}
