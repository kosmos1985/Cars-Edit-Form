import { Component , Inject, OnDestroy, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { Descriptions } from '../models/descriptions';



@Component({
  selector: 'app-desctription',
  templateUrl: './desctription.component.html',
  styleUrls: ['./desctription.component.scss']
})
export class DesctriptionComponent implements OnInit {
  descriptions: Descriptions[]=[];
  private subscriptions2 = new Subscription();
  
  constructor(private apiService: ApiService,@Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {

    console.log(this.data);
    
    const sub2 = this.apiService.getDescriptions1().subscribe(dataDes => {
      this.descriptions = dataDes;
      console.log(this.descriptions);
    }, error => console.error(error),
      () => console.log('Complite')
    );
    this.subscriptions2.add(sub2);

  };
  ngOnDestroy() {
    this.subscriptions2.unsubscribe();
  };

}



