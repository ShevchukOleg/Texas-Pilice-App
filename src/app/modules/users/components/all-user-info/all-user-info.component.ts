import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../../services/users-data.service';
import { User } from '../../interfaces/userInterface';

@Component({
  selector: 'app-all-user-info',
  templateUrl: './all-user-info.component.html',
  styleUrls: ['./all-user-info.component.scss']
})
export class AllUserInfoComponent implements OnInit {
  /**
   * - перелік користувачів для відображення
   */
  public allUsers: User[];

  constructor( public userDataService: UsersDataService) { }

  ngOnInit() {
    this.userDataService.getUsersInfo();
    this.userDataService.allUsersObservableSubject.subscribe(
      (data: User[]) => {
        this.allUsers = data.slice();
        console.log('Data in component class:', this.allUsers);
      },
      (error) => console.log(error)
    );
  }

  public deleteUser(id: string) {
    this.userDataService.deleteUser(id);
  }
}
