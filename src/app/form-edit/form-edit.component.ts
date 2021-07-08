import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { Car } from '../models/car';
import { Descriptions } from '../models/descriptions';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit, OnDestroy {

  cars: Car[] = [];
  descriptions: Descriptions[] = [];
  private subscriptions1 = new Subscription();
  private subscriptions2 = new Subscription();
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const sub1 = this.apiService.getCars().subscribe(cars => {
      this.cars = cars;
      console.log(this.cars);
    }, error => console.error(error),
      () => console.log('Complite')
    );
    this.subscriptions2.add(sub1);
    
    const sub2 = this.apiService.getDescriptions1().subscribe(dataDes => {
      this.descriptions = dataDes;
      console.log(this.descriptions);
    }, error => console.error(error),
      () => console.log('Complite')
    );
    this.subscriptions2.add(sub2);
  };

  removeCar(id :number) {
    this.apiService.deleteCar(id).subscribe();
    alert(`Success! You have removed the car with id: ${id}. Check the changes by going to the Basic or Optional tab.`);
  };

  
  ngOnDestroy() {
    this.subscriptions1.unsubscribe();
    this.subscriptions2.unsubscribe();
  };
}
