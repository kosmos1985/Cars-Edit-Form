import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { Car } from '../models/car';
// import { Descriptions } from '../models/descriptions';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DesctriptionComponent } from '../desctription/desctription.component';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit, OnDestroy{

 @Input()
 allCars!: Car[];
 private subscriptions = new Subscription();
 constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
   
  };
  openDialog() {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.data = {data: allCars};

    // const dialogRef = this.dialog.open(DesctriptionComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(dialogRef._containerInstance._config.data.data.make);
    //   console.log(`Dialog result: ${result}`);
    // });
    this.dialog.open(DesctriptionComponent)
  };
 
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
};
}


