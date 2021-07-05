import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Car } from './models/car';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Recruitment Task';
  dataIsAvailable: boolean;
  cars: Car[] = [];
  private subscriptions = new Subscription();

  constructor(private apiService: ApiService) {
    this.dataIsAvailable = false;
  }

  ngOnInit() {
    const sub = this.apiService.getCars().subscribe(cars => {
      this.cars = cars;
      this.dataIsAvailable = true;
    });
    this.subscriptions.add(sub);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
