import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
//import { JwtAuthStrategy } from './jwt-auth.strategy';
import { Role } from 'src/app/models/types';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class gurdService  {

  
       
    }







