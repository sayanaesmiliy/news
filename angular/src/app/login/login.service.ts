import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class loginService {
    constructor(private httpClient: HttpClient) { }
    readonly baseURL = 'http://localhost:5000';

    login(obj: any): Observable<any> {
        return this.httpClient.post<any>(`${this.baseURL}/api/login/authenticate`, obj);
    }
}