import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersDataService } from '../../services/users-data.service';
import { User } from '../../interfaces/userInterface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  /**
   * отримуємо статичний знімок стану роутингу з параметром ідентифікатору користувача
   */
  private _userId = this.route.snapshot.paramMap.get('id');
  /**
   * об'єкт данних про користувача
   */
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userDataService: UsersDataService,
    private router: Router,
  ) {}

  /**
   * на етапі ініціалізації звертаємось до сервісу на отримання данних про користувачів
   * після цього підписуємось на спостерігач для отримання та фільтрації данних для шаблону
   */
  ngOnInit() {
    this.userDataService.getUsersInfo();
    /**
     * створення переліку підписок
     */
    this.subscriptions.push(
      this.userDataService.allUsersObservableSubject.subscribe(
        (data: User[]) => {
          this.user = data.find((user: User) => user._id === this._userId);
          if (this.user === undefined) {
            this.router.navigate(['']);
          } else {
            console.log('User in component class:', this.user);
          }
        },
        (error) => console.log(error)
      )
    );
  }

  ngOnDestroy(): void {
    /**
     * відписка від спостерігачів сервісу, запобігання втрати пам'яті
     */
    this.subscriptions.forEach(
      (subscription) => {
        subscription.unsubscribe();
        subscription = null;
      }
    );
    this.subscriptions = [];
  }
}
