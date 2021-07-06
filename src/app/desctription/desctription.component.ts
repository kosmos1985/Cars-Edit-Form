import { Component , Inject, OnDestroy, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Descriptions } from '../models/descriptions';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-desctription',
  templateUrl: './desctription.component.html',
  styleUrls: ['./desctription.component.scss']
})
export class DesctriptionComponent implements OnInit, OnDestroy {

  
  descriptions: Descriptions[] = [];
  filteredCode!: Observable<Descriptions[]>;
  control = new FormControl();
  private subscriptions2 = new Subscription();

  constructor(private http:ApiService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    const sub2 = this.http.getDescriptions1().subscribe(data => {
      this.descriptions = data;
      console.log(this.descriptions);
    }, error => console.error(error),
      ()=>console.log('Complite')
    );
    this.subscriptions2.add(sub2);

    this.filteredCode = this.control.valueChanges.pipe(
      startWith(''),
      map(value => value)
    );

  };

  // private _filter(value: any): Descriptions[] {
  //   const filterValue = this._normalizeValue(value);
  //   return this.descriptions.filter(code => this._normalizeValue(code).includes(filterValue));
  // }

  // private _normalizeValue(value: string): string {
  //   return value.toLowerCase().replace(/\s/g,'');
  // }

  console(data: any) {
    console.log(data);
    //"<strong>" + value + "</strong>"
  }
  ngOnDestroy() {
    this.subscriptions2.unsubscribe();
};
}



