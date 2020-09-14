import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../../services/users-data.service';
import { User } from '../../interfaces/userInterface';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { NewUserModalComponent } from '../../../modal/components/new-user-modal/new-user-modal.component';


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
  /**
   * об'єкт данних для створення нового користувача через діалогове вікно
   */
  public dialogInfo: User;

  constructor(
    public userDataService: UsersDataService,
    public dialog: MatDialog
     ) { }
  /**
   * при ініціалізації здійснюється запит до сервісу на отримання данних про всіх користувачів
   * черезі підписку на спосткрігач із сервісу оримуємо і збурішаємо в компоненті ці дані
   */
  ngOnInit() {
    this.userDataService.getUsersInfo();
    this.userDataService.allUsersObservableSubject.subscribe(
      (data: User[]) => {
        this.allUsers = data.slice();
        console.log('Data get in component class:', this.allUsers);
      },
      (error) => console.log(error)
    );
  }
  /**
   * deleteUser - метод видалення користувача
   * @param id - ідентифікатор користувача на видаленя
   */
  public deleteUser(id: string) {
    this.userDataService.deleteUser(id);
  }

  /**
   * метод для відкриття діалогового вікна створення нового користувача
   */
  public openDialog(): void {
    /**
     * dialogConfig - об'єкт конфігурацій діалогового вікна
     */
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '850px';
    dialogConfig.maxWidth = '90%';
    dialogConfig.height = '80vh%';
    dialogConfig.maxHeight = '400px';
    dialogConfig.data = {info: this.dialogInfo};
    /**
     * екземпляр діалогового вікна
     */
    const dialogRef = this.dialog.open( NewUserModalComponent, dialogConfig );
    /**
     * підписка на отримання данних з діалогового вікна
     */
    dialogRef.afterClosed().subscribe( result => {
      if (result.name !== '') {
        console.log('The dialog was closed', result);
        this.dialogInfo = Object.assign({}, result);
        this.userDataService.addNewUser(this.dialogInfo);
      } else {
        console.log('Empty object resived from form');
      }

    });
  }
}
