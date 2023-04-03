import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name = "Hudson"
  age = 38
  job = "Programador"
  hobbies = ['Correr', 'Jogar', 'Música', 'Dançar']
  car = {
    name: 'Corolla',
    year: 2023
  }

}
