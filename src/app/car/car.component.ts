import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

 @Input()
  allCars!: Car[];

  constructor() { }

  ngOnInit(): void {
  }

}
