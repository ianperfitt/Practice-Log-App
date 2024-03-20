import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user.interface';
import { AuthActions } from '../../state/auth.actions';
import { selectError } from '../../state/auth.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error$ = this.store.select(selectError());

  constructor(private store: Store, private _snackBar: MatSnackBar) {
    this.getError();
  }

  ngOnInit(): void {
    
  }

  submit(data: User) {
    this.store.dispatch({type: AuthActions.CREATE_USER, payload: data})

  }

  getError() {
    this.error$.subscribe(data => {
      if(data) {
        let snackBarRef = this._snackBar.open(data.message, "Error", {
          duration: 2500
        });
      }
    })
  }
  

}
