import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './models/car';
import { map, tap} from 'rxjs/operators';
import { Descriptions } from './models/descriptions';
import { Observable } from 'rxjs';

const BASE_URL = '/api';



@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }
  
  getCars() {
    return this.http.get<Car[]>(`${BASE_URL}/cars`);
  };

  getCar(id: number) {
    let endPoints = `/` + id;
    return this.http.get<Car>(`${BASE_URL}/cars` + endPoints).pipe(tap(console.log));
  };
  postCar(newCar:Partial<Car>) {
    return this.http.post(`${BASE_URL}/cars`, newCar).pipe(tap(console.log));
  };

  getDescriptions1() {
    return this.http.get<Descriptions[]>(`${BASE_URL}/descriptions`);
  };

  deleteCar(id: number): Observable<{}> {
    let endPoints = `/`+ id
    return this.http.delete<{}>(`${BASE_URL}/cars` + endPoints).pipe(tap(console.log));
  };


  
}


