import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Role } from 'src/app/models/types';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$ = new BehaviorSubject<User>({
    role: 'USER'
  });
  token = '';
  
  public readonly INITIAL_PATH = '/client/product-list';
  public readonly ADMIN_PATH = '/admin';
  public readonly LOGIN_PATH = '/login';
  public readonly CONFIRM_PATH = '/confirm';

  constructor(
    private router: Router,
    private http: HttpClient,
  
  ){
    this.loadUser();  
  }

  loadUser() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const user = {} as User;
    if( token !== undefined && role !== undefined){
      user.role = role as Role;
      this.token = token;
      this.currentUser$.next(user); 
    }
  }

  getInitialPathForRole(role: Role): string {
    return role === 'ADMIN' ? this.ADMIN_PATH : this.INITIAL_PATH;
  }

 

  isLoggedIn$(): Observable<boolean> {
    return this.getCurrentUser$().pipe(
      map(user => !!user),
      catchError(() => of(false))
    );
  }

  isAdmin$(): Observable<boolean> {
    
    return this.currentUser$.pipe(
      map((user: User) => user.role === 'ADMIN' ? true: false),
      catchError(() => of(false))
    );
  }

  getCurrentUser$(): Observable<User> {// 

    return this.currentUser$;
   
  }

  getUserRole$(): Observable<string> {
    return of('admin');
  
  }

 

}
