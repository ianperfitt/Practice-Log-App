import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeLogCommandBarComponent } from './components/practice-log-command-bar/practice-log-command-bar.component';
import { PracticeLogListComponent } from './components/practice-log-list/practice-log-list.component';
import { PracticeLogFormComponent } from './components/practice-log-form/practice-log-form.component';
import { PracticeLogRoutingModule } from './practice-log-routing.module';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/form/form.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { practiceLogReducer } from './state/practice-log.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PracticeLogEffects } from './state/practice-log.effects';


@NgModule({
  declarations: [
    PracticeLogListComponent,
    PracticeLogFormComponent,
    PracticeLogCommandBarComponent,
    ListComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    PracticeLogRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('practiceLogState', practiceLogReducer),
    EffectsModule.forFeature([PracticeLogEffects])
  ]
})
export class PracticeLogModule { }
