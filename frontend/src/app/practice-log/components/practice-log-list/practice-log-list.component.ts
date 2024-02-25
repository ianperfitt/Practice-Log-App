import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableActions } from '../../enums/table-actions.enum';
import { PracticeLog } from '../../models/practice-log.interface';

@Component({
  selector: 'app-practice-log-list',
  templateUrl: './practice-log-list.component.html',
  styleUrls: ['./practice-log-list.component.scss']
})
export class PracticeLogListComponent implements OnInit {
  @Input() headers: Array<{headerName: string, fieldName: keyof PracticeLog}> = [];
  @Input() practiceLogs: ReadonlyArray<PracticeLog> = [];
  @Output() practiceLog = new EventEmitter<{practiceLog: PracticeLog, action :TableActions}>();
  headerFields: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getHeaderFields();
  }

  getHeaderFields() {
    this.headerFields = this.headers.map((data) => data.fieldName);
    this.headerFields.push("actions");
  }

  selectPracticeLog(practiceLog: PracticeLog, action: TableActions) {
    this.practiceLog.emit({practiceLog, action});
  }

}
