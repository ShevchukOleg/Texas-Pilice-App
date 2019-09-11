import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  private dataLocation: string = environment.dataLocation;
  constructor(private http: HttpClient) { }

  public getUsersInfo(){
    this.http.get(`${this.dataLocation}`)
  }
}
