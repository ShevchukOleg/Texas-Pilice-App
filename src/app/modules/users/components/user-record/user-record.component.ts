import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "src/app/modules/users/interfaces/userInterface";

@Component({
  selector: "app-user-record",
  templateUrl: "./user-record.component.html",
  styleUrls: ["./user-record.component.scss"],
})
export class UserRecordComponent {
  @Input() public userInfo!: User;
  @Output() public remove = new EventEmitter<string>();
}
