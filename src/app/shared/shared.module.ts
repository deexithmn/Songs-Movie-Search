import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { NoContentComponent } from "./no-content/no-content.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  declarations: [
    SearchBarComponent,
    DropdownComponent,
    NoContentComponent,
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    SearchBarComponent,
    DropdownComponent,
    NoContentComponent,
    DatepickerComponent,
    MatIconModule
  ]
})
export class SharedModule {}
