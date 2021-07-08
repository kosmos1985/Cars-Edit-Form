import { Component} from '@angular/core';
import { ApiService } from '../api.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {

  field_data = {
    make: '',
    model: '',
  };

  constructor(private apiService: ApiService) { }


  createCar(formRef: { value: string; }) {
    const newCar:Partial<Car>= {
      make: this.field_data.make,
      model: this.field_data.model,
    };
    console.log(formRef.value);
    this.apiService.postCar(newCar).subscribe();
   
    alert(`Success! You have created new car. Check the changes by going to the Basic or Optional tab.`);
  };

}
