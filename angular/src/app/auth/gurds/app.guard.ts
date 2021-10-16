import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot } from '@angular/router';
import { gurdService } from '../services/gurd.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate{
 

  constructor(private authService: AuthService,private router: Router) { }

  canActivate(): Observable<boolean> {

   return this.canLoad();
  }

  canLoad(): Observable<boolean> {//
    //return true;
    return this.authService.isAdmin$().pipe(
      tap(isAdmin => {
        if (!isAdmin) { this.router.navigate(['/login']); }
      })
    );
  }
}
