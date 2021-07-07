import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  field_data = {
    make: '',
    model: '',
    description:'',
  };

  car:any;

  constructor(public apiService: ApiService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.car = this.apiService.getCar(id);
    console.log(this.car);
    if (id === 0) {
      this.field_data = {
        make: '',
        model: '',
        description:'',
      };
    } else {
      this.field_data = this.car
    }
  };
  updateCar(formRef : { value: string; }) {
    console.log(formRef);
    
  };

 

}
