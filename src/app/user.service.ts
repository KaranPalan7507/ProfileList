import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  private url = "http://pastebin.com/raw/wgkJgazE";
  private users:UserModel[];
  private selectedUser:UserModel;

  constructor(private http: Http) {
  }

  getUsersFromApi(): Promise<any> {
    return this.http.get(this.url).toPromise();
  }

  getUsers(): UserModel[] {
    return this.users;
  }

  setSlectedUser(user: UserModel) {
    this.selectedUser = user;
  }

  getSelectedUser(){
    return this.selectedUser;
  }
}

