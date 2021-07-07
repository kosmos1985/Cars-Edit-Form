import { Component, OnInit, OnDestroy } from '@angular/core';
import { Car } from '../models/car';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DesctriptionComponent } from '../desctription/desctription.component';
import { Descriptions } from '../models/descriptions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  dataIsAvailable: boolean;
  cars: Car[] = [];
  descriptions: Descriptions[] = [];
  
  private subscriptions = new Subscription();
  private subscriptions2 = new Subscription();

  constructor(private apiService: ApiService, public dialog: MatDialog) {
    this.dataIsAvailable = false;
  }

  ngOnInit(): void {
    const sub = this.apiService.getCars().subscribe(cars => {
      this.cars = cars;
      this.dataIsAvailable = true;
    });
    this.subscriptions.add(sub);

    const sub2 = this.apiService.getDescriptions1().subscribe(dataDes => {
      this.descriptions = dataDes;
      console.log(this.descriptions);
    }, error => console.error(error),
      ()=>console.log('Complite')
    );
    this.subscriptions2.add(sub2);
  }
  openDialog(car: any, description: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = [{ data: car },{dataDescription: description}];

    this.dialog.open(DesctriptionComponent, dialogConfig);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.subscriptions2.unsubscribe();
  }

}
