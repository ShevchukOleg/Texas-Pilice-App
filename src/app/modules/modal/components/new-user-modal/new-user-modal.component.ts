import { Component, Inject, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../../../users/interfaces/userInterface';

@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
  styleUrls: ['./new-user-modal.component.scss']
})
export class NewUserModalComponent implements OnInit  {

  public genders = [
    {value: 'male', viewValue: 'man' },
    {value: 'female', viewValue: 'woman' }
  ];
  /**
   * - для збереження об'єкту данних нового користувача
   */
  public newUser: User;
  /**
   * контейнер данних форми
   */
  public newUserForm: FormGroup;
  /**
   * конструктор
   * @param dialogRef  - посилання на відкрите модальне вікно через сервіс MatDialog
   * @param data - вхідна інформація від батьківської компоненті передана через сервіс MatDialog у цтому прикладі непотрібний
   */
  constructor(
    public dialogRef: MatDialogRef<NewUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    /**
     * ініціалізація реактивної форми, присвоєння початкових значень та валідаторів
     */
    ngOnInit(): void {
      this.newUserForm = new FormGroup({
        isActive: new FormControl(true),
        balance: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(9)]),
        age: new FormControl('', [Validators.minLength(1), Validators.maxLength(3)]),
        eyeColor: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        about: new FormControl('', [Validators.required])
      });
    }

    /**
     * метод закриття модального вікна без передачі данних
     */
    closeModal(): void {
      this.dialogRef.close();
  }
  /**
   * -метод додання нового користувача, створює об'єкт користувача на основі реактивно форми
   * та передає його в результат роботи модального вікна
   */
  public addUser() {
    this.newUser = {
      name: this.newUserForm.get('name').value,
      age: this.newUserForm.get('age').value,
      gender: this.newUserForm.get('gender').value,
      eyeColor: this.newUserForm.get('eyeColor').value,
      about: this.newUserForm.get('about').value,
      balance: this.newUserForm.get('balance').value,
      _id: Date.now().toString(16),
      registered: (new Date()).toISOString(),
      guid: Date.now().toString(32),
      isActive: true,
      picture: 'assets/images/Avatar-Male.jpg',
      latitude: 0,
      longitude: 0,
      tags: ['new murder'],
      email: 'somemail@rambler.ru',
      company: 'Groupe undefined',
      phone: 'undefined',
      address: 'undefined'
    };
    this.dialogRef.close(this.newUser);
  }
}
