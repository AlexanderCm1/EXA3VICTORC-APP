import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../model/cliente';
import {ClienteService} from '../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ClienteService]
})
export class ClienteComponent implements OnInit {

  constructor(
    private _clientetService:ClienteService
  ) { }

  ngOnInit() {
  }
  getCliente(){
    this._clientetService.getService().subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
