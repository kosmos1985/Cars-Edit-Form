import { Component, OnInit, OnDestroy } from '@angular/core';
import { Car } from '../models/car';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  dataIsAvailable: boolean;
  cars: Car[] = [];
  private subscriptions = new Subscription();

  constructor(private apiService: ApiService) {
    this.dataIsAvailable = false;
  }

  ngOnInit(): void {
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
