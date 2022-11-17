import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads-grid',
  templateUrl: './leads-grid.component.html',
  styleUrls: ['./leads-grid.component.css']
})
export class LeadsGridComponent implements OnInit {
  activatedRoute: any;

  constructor(private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.ActivatedRoute.snapshot.data);
    
  }

}
