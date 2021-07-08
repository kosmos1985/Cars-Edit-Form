import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Car } from '../models/car';
import { Field } from '../models/field';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  field_data: Field;

  car:any;

  constructor(public apiService: ApiService, private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.getOneCar(id); 
  };
  getOneCar(id: number) {
    this.car = this.apiService.getCar(id).subscribe(car => {
    this.car = car;
    
    if (id === 0) {
      this.field_data = {
        make: '',
        model: '',
        description:'',
      };
    } else {
      this.field_data = this.car
    }
    
    }); 
  };
  updateCar(formRef: { value: string; }, id: number) {

    console.log(formRef);   
    this.apiService.patchCar(formRef, id).subscribe();
  
    alert(`Success! You have modified the car with id: ${id}. Check the changes by going to the Basic or Optional tab.`);
  };
       
}; 


