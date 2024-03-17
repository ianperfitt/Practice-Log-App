import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  PracticeLog } from '../../models/practice-log.interface';

@Component({
  selector: 'app-practice-log-form',
  templateUrl: './practice-log-form.component.html',
  styleUrls: ['./practice-log-form.component.scss']
})

export class PracticeLogFormComponent implements OnInit {
  @Input() selectedPracticeLog: PracticeLog | null = null;
  @Input() actionButtonLabel: string = 'Create';
  @Output() action = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [''],
      instrument: [''],
      key: [''],
      tempo: [''],
      description: ['']
    })
   }

  ngOnInit(): void {
    this.checkAction();
  }

  checkAction() {
    if(this.selectedPracticeLog) {
      this.actionButtonLabel = "Update";
      this.patchDataValues()
    }
  }

  patchDataValues () {
    if(this.selectedPracticeLog)
      this.form.patchValue(this.selectedPracticeLog);
  }

  emitAction() {
    this.action.emit({value: this.form.value, action: this.actionButtonLabel})
  }

  clear() {
     this.form.reset();
  }
}
