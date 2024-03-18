import { Component, OnInit } from '@angular/core';
import { PracticeLog } from '../../models/practice-log.interface';
import { TableActions } from '../../enums/table-actions.enum';
import { Router } from '@angular/router';
import { CommandBarActions } from '../../enums/command-bar-actions.enum';
import { selectPracticeLogs } from '../../state/practice-log.selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { PracticeLogActions } from '../../state/practice-log.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  practiceLogs: ReadonlyArray<PracticeLog> = [];
  practiceLogs$ = this.store.select(selectPracticeLogs());

  headers: {headerName: string, fieldName: keyof PracticeLog}[] = [
    {headerName: "Instrument", fieldName: "instrument"},
    {headerName: "Key", fieldName: "key"},
    {headerName: "Tempo", fieldName: "tempo"},
    {headerName: "Description", fieldName: "description"},
  ]

  constructor(
    private router: Router,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.store.dispatch({type: PracticeLogActions.GET_PRACTICE_LOG_LIST});
    this.assignPracticeLogs();
  }

  assignPracticeLogs() {
    this.practiceLogs$.subscribe((data: readonly PracticeLog[]) => {
      this.practiceLogs = data;
    });
  }

  selectPracticeLog(data: {practiceLog: PracticeLog, action: TableActions}) {
    switch(data.action) {
      case TableActions.View: {
        this.router.navigate(['practice-logs', 'form', data.practiceLog.id]);
        return;
      }
      case TableActions.Delete: {
        this.store.dispatch({type: PracticeLogActions.REMOVE_PRACTICE_LOG_API, payload: data.practiceLog.id});
        return;

      }
      default: ""
    }
  }

  executeCommandBarAction(action: CommandBarActions) {
    switch(action) {
      case CommandBarActions.Create: {
        this.router.navigate(["practice-logs", "form"]);
        return;
      }
      case CommandBarActions.DeleteAll: {
        const ids: string[] = this.practiceLogs.map((a) => a.id);
        this.store.dispatch({type: PracticeLogActions.REMOVE_ALL_PRACTICE_LOG_API, payload: ids});
        return;
      }
      default: ""
    }
  }
}
