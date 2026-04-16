import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private service: UserService, private router: Router) {}

  loginUser() {
    if (this.service.login(this.email, this.password)) {
      alert("Login Successful");
      this.router.navigate(['/profile']);
    } else {
      alert("Invalid Credentials");
    }
  }
}