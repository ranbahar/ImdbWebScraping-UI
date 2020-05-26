import {Injectable} from '@angular/core';
import {ICeleb} from '../../types/ICeleb';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  private celebsURL = 'http://localhost:8080/api/v1/imdb'; // for mockDB 'http://localhost:3000/celebs'

  constructor(private http: HttpClient) {

  }

  getCelebrities(isReload: boolean = false): Observable<ICeleb[]> {
    const url = isReload ? this.celebsURL + `/init` : this.celebsURL;
    // this.spinnerService.show();
    return this.http.get<ICeleb[]>(url).pipe(
      tap(data => data), // console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getCeleb(id: number): Observable<ICeleb> {
    return this.http.get<ICeleb>(this.celebsURL + `/${id}`).pipe(
      tap(data => console.log('Celeb Details: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  removeCeleb(id: number): Observable<any> {
    return this.http.delete(this.celebsURL + `/${id}`);
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  update(celeb: ICeleb): Observable<ICeleb> {
    return this.http.put<ICeleb>(this.celebsURL + `/${celeb.id}`, celeb).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
}
