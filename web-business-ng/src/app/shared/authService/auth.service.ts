import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    baseUrl: string = environment.baseUrl;
    isLoggedIn: boolean = false;

    constructor(private http: HttpClient){

    }

    loginAndRegister(payload: any, subUrl: string): Observable<any>{
        return this.http.post(this.baseUrl + subUrl, payload);
    }
}