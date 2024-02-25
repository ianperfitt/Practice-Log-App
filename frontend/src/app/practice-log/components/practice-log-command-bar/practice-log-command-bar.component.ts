import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommandBarActions } from '../../enums/command-bar-actions.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice-log-command-bar',
  templateUrl: './practice-log-command-bar.component.html',
})
export class PracticeLogCommandBarComponent implements OnInit {
  @Output() action = new EventEmitter<CommandBarActions>()
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  emitAction(action: CommandBarActions) {
    this.action.emit(action);
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login').then();
  }

}
