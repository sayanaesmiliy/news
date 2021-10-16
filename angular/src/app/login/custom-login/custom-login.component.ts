import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { loginService } from '../login.service';

@Component({
  selector: 'app-custom-login',
  templateUrl: './custom-login.component.html',
  styleUrls: ['./custom-login.component.scss']
})
export class CustomLoginComponent implements OnInit {

  public login: { Username?: string, Password?: string } = {};


  constructor(
    private service: loginService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onlogin() {

    if (!this.login.Username || !this.login.Password) {
      alert('لطفا پسورد خود را وارد کنید');
      return;
    }

    this.service.login(this.login)
    .pipe(
      catchError(
        xhr =>{      
          console.error(xhr);
          return of([]);
        }),
      map(
        res => {
    // debugger; 
          if (!res) {
            alert('نام کاربری یا رمز عبور اشتباه است');
            return;
          }
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.role); 
          this.router.navigate(['/client/product-list']);
         }
      ),
    ).subscribe();

  }
  logout() {
    localStorage.removeItem('token');
  }
}
