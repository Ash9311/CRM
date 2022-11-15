import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  color = '';
  priceTo = 0;
  priceFrom = 0;
  size = 'M';
//check if forms is dirty fields
isDirty = true;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {//whatever param u enter in browser it will be stored here and can be displayed in view
      console.log(params); //http://localhost:4200/app1#/search?id=10&color=black&size='XXXL'
      this.color = params['color'];
      this.size = params['size'];
      
    })
   }

  ngOnInit(): void {
  }

}
