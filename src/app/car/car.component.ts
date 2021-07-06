import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { Descriptions } from '../models/descriptions';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit{

 @Input()
 allCars!: Car[];
  descriptions: Descriptions[]=[];
 constructor() { }

  ngOnInit(): void {
  }

  addDescriptions(descriptions: Descriptions) {
    this.descriptions.unshift(descriptions);
  }
 
}
