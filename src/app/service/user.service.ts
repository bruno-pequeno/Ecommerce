import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  authUser(cpf: string, password: string): Observable<any> {
    const url = this.apiURL + '/api/auth/' + cpf + '/' + password;
    return this.http.get(url);
  }

  stamp50(cpf: string): Observable<any> {
    const url = this.apiURL + '/api/user/' + cpf + '/50';
    return this.http.get(url);
  }

  stamp75(cpf: string): Observable<any> {
    const url = this.apiURL + '/api/user/' + cpf + '/75';
    return this.http.get(url);
  }

  stamp100(cpf: string): Observable<any> {
    const url = this.apiURL + '/api/user/' + cpf + '/100';
    return this.http.get(url);
  }
}
