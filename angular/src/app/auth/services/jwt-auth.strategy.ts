import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Token } from 'src/app/models/token';
import { User } from 'src/app/models/user';
import { gurdService } from './gurd.service';


export class JwtAuthStrategy {
  constructor(
    private auth: gurdService,
    private router: Router
  ) {}



  private readonly token = 'token';// 

  doLoginUser(token: Token): void {
    localStorage.setItem(this.token, token.jwt);
  }
  
  public get loggedIn(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }



  getCurrentUser(): Observable<User> {
    const token = this.getToken();
    if (token) {
      const encodedPayload = token.split('.')[1];
      const payload = window.atob(encodedPayload);
      return of(JSON.parse(payload));
    } else {
      return of(undefined);
    }
  }

  getToken() {
    return localStorage.getItem(this.token);
  }

}
