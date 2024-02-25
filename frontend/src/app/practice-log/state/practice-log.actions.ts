import { createAction, props } from "@ngrx/store";
import { PracticeLog } from "../models/practice-log.interface";


export enum PracticeLogActions {
    GET_PRACTICE_LOG_LIST = '[Practice-Log] Get Practice-Log list',
    SET_PRACTICE_LOG_LIST = '[Practice-Log] Set Practice-Log list',
    ADD_PRACTICE_LOG_API = '[Practice-Log] Add Practice-Log (API)',
    ADD_PRACTICE_LOG_STATE = '[Practice-Log] Add Practice-Log (STATE)',
    MODIFY_PRACTICE_LOG_API = '[Practice-Log] Modify Practice-Log (API)',
    MODIFY_PRACTICE_LOG_STATE = '[Practice-Log] Modify Practice-Log (STATE)',
    REMOVE_PRACTICE_LOG_API = '[Practice-Log] Remove Practice-Log (API)',
    REMOVE_PRACTICE_LOG_STATE = '[Practice-Log] Remove Practice-Log (STATE)',
    REMOVE_ALL_PRACTICE_LOG_API = '[Practice-Log] Remove All Practice-Log (API)',
    REMOVE_ALL_PRACTICE_LOG_STATE = '[Practice-Log] Remove ALL Practice-Log (STATE)',
}

export const modifyPracticeLogState = createAction(
    PracticeLogActions.MODIFY_PRACTICE_LOG_STATE,
    props<{ practiceLog: PracticeLog}>()
);

export const addPracticeLogState = createAction(
    PracticeLogActions.ADD_PRACTICE_LOG_STATE,
    props<{ practiceLog: PracticeLog }>()
);

export const removePracticeLogState = createAction(
    PracticeLogActions.REMOVE_PRACTICE_LOG_STATE,
    props<{ practiceLogId: string}>()
);

export const getPracticeLogList = createAction(
    PracticeLogActions.GET_PRACTICE_LOG_LIST,
);

export const setPracticeLogList = createAction(
    PracticeLogActions.SET_PRACTICE_LOG_LIST,
    props<{ practiceLogs: ReadonlyArray<PracticeLog> }>()
);

export const removeAllPracticeLogState = createAction(
    PracticeLogActions.REMOVE_ALL_PRACTICE_LOG_STATE
  );