import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input()
  carsList!: Car[];

  constructor() { }

  ngOnInit(): void {
  }

}
