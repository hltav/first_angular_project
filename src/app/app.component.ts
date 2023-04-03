import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Hudson'
  userData = {
    email: 'hudsonlimatavares@gmail.com',
    role: 'Admin',
  }

  title = 'first_angular_project';
}
