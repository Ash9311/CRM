import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clientList = [
    {clientId: 10,firstName: 'Ash',lastName: 'mulky'},
    {clientId: 11,firstName: 'Ash2',lastName: 'mulky'},
    {clientId: 12,firstName: 'Ash3',lastName: 'mulky'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
