import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PracticeLog } from '../models/practice-log.interface';

@Injectable({
  providedIn: 'root'
})
export class PracticeLogService {

  constructor(private http: HttpClient) { }

  
  getPracticeLogs(): Observable<PracticeLog[]> {
    return this.http.get<PracticeLog[]>(`${environment.apiURL}/practice-logs`).pipe(
      tap((data: PracticeLog[]) => data),
      catchError(err => throwError(() => err))
   )
  }

  getPracticeLog(id: string): Observable<PracticeLog> {
    return this.http.get<PracticeLog>(`${environment.apiURL}/practice-logs/${id}`).pipe(
       tap((data: PracticeLog) => data),
       catchError(err => throwError(() => err))
    )
   }

  addPracticeLog(practiceLog: PracticeLog) : Observable<PracticeLog> {

    return this.http.post<PracticeLog>(`${environment.apiURL}/practice-logs`, practiceLog).pipe(
      tap((data: PracticeLog) => data),
      catchError(err => throwError(() => err))
   )
  }

  updatePracticeLog(id:string, practiceLog: PracticeLog) : Observable<PracticeLog> {
    return this.http.put<PracticeLog>(`${environment.apiURL}/practice-logs/${id}`, practiceLog).pipe(
      catchError(err => throwError(() => err))
   )
  }

   deletePracticeLog(id:string) : Observable<PracticeLog> {
    return this.http.delete<PracticeLog>(`${environment.apiURL}/practice-logs/${id}`).pipe(
      catchError(err => throwError(() => err))
   )
  }
}
