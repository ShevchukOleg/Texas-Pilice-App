import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersDataService } from '../../services/users-data.service';
import { User } from '../../interfaces/userInterface';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
  /**
   * отримуємо статичний знімок стану роутингу з параметром ідентифікатору користувача
   */
  private userId = this.route.snapshot.paramMap.get('id');
  /**
   * об'єкт данних про користувача
   */
  public user: User;

  constructor(
    private route: ActivatedRoute,
    private userDataService: UsersDataService,
    private router: Router,
  ) {
    }
  /**
   * на етапі ініціалізації звертаємось до сервісу на отримання данних про користувачів
   * після цього підписуємось на спостерігач для отримання та фільтрації данних для шаблону
   */
  ngOnInit() {
    this.userDataService.getUsersInfo();
    this.userDataService.allUsersObservableSubject.subscribe(
      (data: User[]) => {
        this.user = data.find((user: User) => user._id === this.userId);
        if (this.user === undefined) {
          this.router.navigate(['']);
        } else {
          console.log('User in component class:', this.user);
        }
      },
      (error) => console.log(error)
    );
  }
}
