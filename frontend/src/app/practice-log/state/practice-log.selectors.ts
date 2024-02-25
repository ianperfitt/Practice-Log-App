import { createFeatureSelector, createSelector } from "@ngrx/store"
import { PracticeLogState } from "./practice-log.reducers"

export const selectPracticeLogState  = 
createFeatureSelector<PracticeLogState>('practiceLogState')

export const selectPracticeLogs = () => createSelector(
    selectPracticeLogState,
    (state: PracticeLogState) => state.practiceLogs
)

export const selectPracticeLog = (id: string) => createSelector(
    selectPracticeLogState,
    (state: PracticeLogState) => state.practiceLogs.find(d => d.id === id)
)