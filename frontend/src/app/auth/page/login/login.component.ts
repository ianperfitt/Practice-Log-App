import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthenticateService } from 'src/app/core/services/authenticate.service';
import { User } from '../../models/user.interface';
import { AuthActions } from '../../state/auth.actions';
import { selectError } from '../../state/auth.selectors';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  error$ = this.store.select(selectError());
  

  constructor(private store: Store, private authService: AuthenticateService, private router: Router, private _snackBar: MatSnackBar) {
    this.checkJWT();
    this.getError();
  }

  submit(data: User) {
    this.store.dispatch({type: AuthActions.LOGIN, payload: data})

  }

  getError() {
    this.error$.subscribe(data  => {
      console.log("data before if: ", data);
      console.log("data.message before if: " + data.message);
      console.log("data.error before if: " + data.error);
      console.log("data.error.message before if: " + data.error.message);
      if(data) {
        console.log("data after if: " + data);
        console.log("data.message after if: " + data.message);
        console.log("data.error after if: " + data.error);
        console.log("data.error.message after if: " + data.error.message);
        let snackBarRef = this._snackBar.open(data.message, "Error", {
          duration: 2500
        });
        snackBarRef.afterDismissed().subscribe(() => {
          this.store.dispatch({type: AuthActions.REMOVE_LOGIN_ERROR, payload: null})
        });
      }
     })
  }

  checkJWT() {
    if(this.authService.isAuthenticated()) {
      this.router.navigate(['/practice-logs'])
    }
  }

}
