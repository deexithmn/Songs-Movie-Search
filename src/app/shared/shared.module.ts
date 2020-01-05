import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { NoContentComponent } from "./no-content/no-content.component";

@NgModule({
  declarations: [SearchBarComponent, DropdownComponent, NoContentComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [SearchBarComponent, DropdownComponent, NoContentComponent]
})
export class SharedModule {}
