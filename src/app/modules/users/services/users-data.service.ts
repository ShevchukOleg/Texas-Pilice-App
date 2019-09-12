import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/userInterface';

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
  private allUsers: User[];

  /**
   * декларація спостерігача для асинхронної передачі данних з сервісу
   */
  private allUsersSource = new BehaviorSubject([]);
  public allUsersObservableSubject: Observable<User[]> = this.allUsersSource.asObservable();


  constructor(private http: HttpClient) { }

  /**
   * метод отримання бази данних з локального json  файлу
   */
  public getUsersInfo() {
    this.http.get<User[]>(this.dataLocation).subscribe(
      (data: User[]) =>  {
        this.allUsers = data.slice();
        console.log('Data in service: ', this.allUsers);
        this.allUsersSource.next(this.allUsers);
      },

      (error) => console.log(error)
    );
  }

  public deleteUser(id: string) {
    this.allUsers = this.allUsers.filter((user) => user._id !== id);
    console.log('User delete successful');
    this.allUsersSource.next(this.allUsers);
  }
}
