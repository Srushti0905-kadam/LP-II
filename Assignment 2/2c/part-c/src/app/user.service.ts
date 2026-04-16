import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any;

  register(data: any) {
    this.user = data;
  }

  login(email: string, password: string) {
    return this.user &&
           this.user.email === email &&
           this.user.password === password;
  }

  getUser() {
    return this.user;
  }
}