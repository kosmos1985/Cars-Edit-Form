import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Car } from '../models/car';




@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {

 @Input()
 allCars!: Car;
 constructor() { }
  
 
}


