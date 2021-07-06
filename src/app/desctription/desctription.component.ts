import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { Descriptions } from '../models/descriptions';

@Component({
  selector: 'app-desctription',
  templateUrl: './desctription.component.html',
  styleUrls: ['./desctription.component.scss']
})
export class DesctriptionComponent implements OnInit {

  
  descriptions: Descriptions[] = [];
  private subscriptions = new Subscription();

  constructor(private apiService: ApiService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
  
    const sub = this.apiService. getDescriptions1().subscribe(descriptions => {
      this.descriptions = descriptions;
     
    });
  
    this.subscriptions.add(sub);

    // let items = this.route.snapshot.paramMap.get('id');
    // this.descriptions = this.apiService.getDescriptions(items);

  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
