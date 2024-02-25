import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PracticeLogActions } from '../../state/practice-log.actions';
import { PracticeLog } from '../../models/practice-log.interface';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPracticeLog } from '../../state/practice-log.selectors';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  practiceLog$: Observable<PracticeLog | undefined>;
  practiceLog: PracticeLog | null = null;
  
  constructor(private router: ActivatedRoute, private store: Store<AppState>) {
    const id = this.router.snapshot.params['id'];
    this.practiceLog$ = this.store.select(selectPracticeLog(id));
    this.practiceLog$.subscribe(d => {
      if(d) this.practiceLog = d;
    });
   }
  
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    const confirmation = window.confirm('Are you sure?');
    return confirmation;
  }

  ngOnInit(): void {
  }

  formAction(data: {value: PracticeLog, action: string}) {
    switch(data.action) {
      case "Create" : {
        this.store.dispatch({type:
          PracticeLogActions.ADD_PRACTICE_LOG_API,
          payload: data.value});
        return;
      }
      case "Update" : {
        this.store.dispatch({type: PracticeLogActions.MODIFY_PRACTICE_LOG_API, payload: data.value});
        return;
      }
      default: ""
    }
  }

}
