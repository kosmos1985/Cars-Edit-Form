import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './models/car';
import { tap} from 'rxjs/operators';

const BASE_URL = '/api';



@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get<Car[]>(`${BASE_URL}/cars`);
  };
  postCar(newCar:Partial<Car>) {
    return this.http.post(`${BASE_URL}/cars`, newCar).pipe(tap(console.log));
  };

}


