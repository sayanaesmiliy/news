import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot } from '@angular/router';
//import { gurdService } from '../services/gurd.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate{
 

  constructor(private authService: AuthService,private router: Router) { }

  canActivate(): boolean {
   //
  // console.log("AlwaysAuthGuard");
     return false;
     
  }

}

