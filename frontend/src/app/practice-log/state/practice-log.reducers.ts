import { createReducer, on } from '@ngrx/store';
import { PracticeLog } from '../models/practice-log.interface';
import { addPracticeLogState, modifyPracticeLogState, removeAllPracticeLogState, removePracticeLogState, setPracticeLogList } from './practice-log.actions';

export interface PracticeLogState {
    practiceLogs: ReadonlyArray<PracticeLog>;
}

export const initialState: PracticeLogState = {
    practiceLogs: []
}

export const practiceLogReducer = createReducer(
  initialState,
  on(setPracticeLogList, (state, { practiceLogs }) => { return {...state, practiceLogs}}),
  on(removePracticeLogState, (state, { practiceLogId}) => {
    return {...state, practiceLogs:
    state.practiceLogs.filter(data => data.id != practiceLogId)}}),
    on(addPracticeLogState, (state, {practiceLog}) => {
      return {...state, practiceLogs: [...state.practiceLogs,
        practiceLog]}
    }),
    on(modifyPracticeLogState, (state, {practiceLog}) => {
      return {...state, practiceLogs: state.practiceLogs.map(data => data.id === practiceLog.id ? practiceLog : data)}
    }),
    on(removeAllPracticeLogState, (state) => {
      return {...state, practiceLogs: []}
    }),
  );
