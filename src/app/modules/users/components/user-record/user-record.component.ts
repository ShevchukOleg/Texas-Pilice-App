import { Component, Input, OnInit, Output } from "@angular/core";
import { EventEmitter } from "protractor";
import { User } from "src/app/modules/users/interfaces/userInterface";

@Component({
  selector: "app-user-record",
  templateUrl: "./user-record.component.html",
  styleUrls: ["./user-record.component.scss"],
})
export class UserRecordComponent implements OnInit {
  @Input() public userInfo!: User;
  @Output() public remove = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
