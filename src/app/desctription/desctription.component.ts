import { Component , Inject, OnDestroy, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {  Subscription } from 'rxjs';
import { Descriptions } from '../models/descriptions';
import { Car } from '../models/car';



@Component({
  selector: 'app-desctription',
  templateUrl: './desctription.component.html',
  styleUrls: ['./desctription.component.scss']
})
export class DesctriptionComponent implements OnInit, OnDestroy {
  
  car: Car[];
  descriptions: Descriptions[] = [];
  
  private subscriptions2 = new Subscription();

  constructor(private http:ApiService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    
   
    const sub2 = this.http.getDescriptions1().subscribe(dataDes => {
      this.descriptions = dataDes;
      console.log(this.descriptions);
    }, error => console.error(error),
      ()=>console.log('Complite')
    );
    this.subscriptions2.add(sub2);

  };


  console(data: any) {
    console.log(data);
    //"<strong>" + value + "</strong>"
  }
  ngOnDestroy() {
    this.subscriptions2.unsubscribe();
};
}



