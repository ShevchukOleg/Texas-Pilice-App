import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, BehaviorSubject} from 'rxjs';
import { User } from '../interfaces/userInterface';
import { MessageService } from 'primeng/api';


@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  /**
   * - шлях до локальних данних json  файлу
   */
  private dataLocation: string = environment.dataLocation;
  /**
   * - перелік всіх користувачів
   */
  private allUsers: User[] = [];

  /**
   * декларація спостерігача для асинхронної передачі данних з сервісу
   */
  private allUsersSource = new BehaviorSubject([]);
  public allUsersObservableSubject: Observable<User[]> = this.allUsersSource.asObservable();


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /**
   * метод отримання бази данних з локального json  файлу
   */
  public getUsersInfo() {

    if (!this.allUsers.length) {
      this.http.get<User[]>(this.dataLocation).subscribe(
        (data: User[]) =>  {
          this.allUsers = data.slice();
          console.log('Data in service: ', this.allUsers);
          this.allUsersSource.next(this.allUsers);
        },

        (error) => console.log(error)
      );
    } else {
      this.allUsersSource.next(this.allUsers);
    }
  }
  /**
   * - метод видалення користувача з бащи данних
   * @param id - ідентифікатор користувача
   */
  public deleteUser(id: string) {
    this.allUsers = this.allUsers.filter((user) => user._id !== id);
    console.log('User delete successful');
    this.allUsersSource.next(this.allUsers);
    this.messageService.add({severity: 'warn', summary: 'Report', detail: 'Criminal detained!'});
  }

  /**
   * - метод створення нового користувача на основі отриманних даних з дівлогового вікна
   * @param newUser - дані про нового користувача
   */
  public addNewUser(newUser: User) {
    this.allUsers.unshift(newUser);
    console.log('New user add into base', this.allUsers);
    this.allUsersSource.next(this.allUsers);
  }
}
