import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  user = { name: '', email: '', password: '' };

  constructor(private service: UserService, private router: Router) {}

  registerUser() {
    this.service.register(this.user);
    alert("Registered Successfully");
    this.router.navigate(['/login']);
  }
}