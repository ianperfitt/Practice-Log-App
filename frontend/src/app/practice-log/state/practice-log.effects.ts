import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PracticeLogActions } from "./practice-log.actions";
import { EMPTY, catchError, forkJoin, map, mergeMap, tap } from "rxjs";
import { PracticeLog } from "../models/practice-log.interface";
import { PracticeLogService } from "../services/practice-log.service";

@Injectable()
export class PracticeLogEffects {

    getPracticeLogs$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PracticeLogActions.GET_PRACTICE_LOG_LIST),
            mergeMap(() => this.practiceLogService.getPracticeLogs()
            .pipe(
                map(practiceLogs => ({ type: PracticeLogActions.SET_PRACTICE_LOG_LIST, practiceLogs})),
                catchError(() => EMPTY)
            ))
        )
    }, {dispatch: true});

    removePracticeLog$  = createEffect(()  => {
        return this.actions$.pipe(
            ofType(PracticeLogActions.REMOVE_PRACTICE_LOG_API),
            mergeMap((data: { payload: string}) =>
                this.practiceLogService.deletePracticeLog(data.payload)
                .pipe(
                    map(() => ({type:
                      PracticeLogActions.REMOVE_PRACTICE_LOG_STATE,
                      practiceLogId: data.payload })),
                    catchError(() => EMPTY)
                ))
            )
        }, {dispatch: true}
    );

    // add practice-logs in the database
  addPracticeLog$ = createEffect(() =>{
    return this.actions$.pipe(
        ofType(PracticeLogActions.ADD_PRACTICE_LOG_API),
        mergeMap((data: {type: string, payload: PracticeLog}) => this.practiceLogService.addPracticeLog(data.payload)
          .pipe(
            map(practiceLogs => ({ type: PracticeLogActions.ADD_PRACTICE_LOG_STATE, practiceLog: data.payload })),
            tap(() =>  this.router.navigate(["practice-logs"])),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true})

    modifyPracticeLog$ = createEffect(() =>{
        return this.actions$.pipe(
            ofType(PracticeLogActions.MODIFY_PRACTICE_LOG_API),
            mergeMap((data: {type: string, payload: PracticeLog}) => this.practiceLogService.updatePracticeLog(data.payload.id, data.payload)
              .pipe(
                map(practiceLogs => ({ type: PracticeLogActions.MODIFY_PRACTICE_LOG_STATE, practiceLog: data.payload })),
                tap(() =>  this.router.navigate(["practice-logs"])),
                catchError(() => EMPTY)
              ))
            )
        }, {dispatch: true})

  // remove all practice logs in the database
  removeAllPracticeLog$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(PracticeLogActions.REMOVE_ALL_PRACTICE_LOG_API),
        mergeMap((data: {type: string, payload: string[]}) =>
        forkJoin([...data.payload.map((id) => this.practiceLogService.deletePracticeLog(id))])
          .pipe(
            map(() => ({ type: PracticeLogActions.REMOVE_ALL_PRACTICE_LOG_STATE })),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true}
  );


    constructor(
        private actions$: Actions,
        private practiceLogService: PracticeLogService,
        private router: Router
    ) {}
}
