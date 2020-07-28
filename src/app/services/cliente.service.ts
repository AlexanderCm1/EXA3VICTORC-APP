import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {Cliente} from '../model/cliente';


@Injectable()
export class ClienteService{

    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = 'http://localhost:8080'
    }
    testService(){
        return 'Probando el servicio'
    }
    getService():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url , {headers: headers });
    }
}