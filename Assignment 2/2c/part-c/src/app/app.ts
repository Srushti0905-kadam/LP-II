import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet, RouterLink],  
  template: `
    <h1>User Authentication App</h1>

    <nav>
      <a routerLink="/">Register</a> |
      <a routerLink="/login">Login</a> |
      <a routerLink="/profile">Profile</a>
    </nav>

    <hr>

    <router-outlet></router-outlet>
  `
})
export class App {}