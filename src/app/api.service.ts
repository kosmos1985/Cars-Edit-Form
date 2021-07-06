import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './models/car';
import { map, tap} from 'rxjs/operators';
import { Descriptions } from './models/descriptions';

const BASE_URL = '/api';



@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }
  
  getCars() {
    return this.http.get<Car[]>(`${BASE_URL}/cars`);
  };
  postCar(newCar:Partial<Car>) {
    return this.http.post(`${BASE_URL}/cars`, newCar).pipe(tap(console.log));
  };

  getDescriptions1() {
    return this.http.get<Descriptions[]>(`${BASE_URL}/descriptions`);
  };

  getOnceDescriptions(items: string | number | null | undefined) {
    let item = this.http.get<Descriptions[]>(`${BASE_URL}/descriptions`).pipe(map(result=>result.filter(result => result.id === items)));
    
    return console.log(item);
    
  };
  
}


