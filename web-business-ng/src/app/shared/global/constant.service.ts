import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class ConstantService {
    isLoggedIn: boolean = false;
    public httpOptions: any;
    constructor(private http: HttpClient){

    }

    setHttpOptions(){
        this.httpOptions = {
            headers: new HttpHeaders({
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            }),
        };
    }
}