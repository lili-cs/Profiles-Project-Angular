import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Profile } from 'src/app/interfaces/profile';
import { catchError, Observable, subscribeOn, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  readonly domainUrl = 'http://localhost:3000';

  handleError(error: HttpErrorResponse) {
    if(error.status == 0) {
      return console.error('An client side error occurred:', error.error);
    }

    console.error('backend error', error.error);

    return throwError(() => new Error('Something bad happend; please try agian later'));
  }

  addProfile(newProfile: Profile): Observable<any>{
    return this.http.post<Profile>(this.domainUrl + '/profiles/add', newProfile);
  }

  getProfiles() {
    return this.http.get<any[]>(this.domainUrl + '/profiles');
  }

  updateProfile(updatedProfile: Profile): Observable<any>{
    return this.http.put(`${this.domainUrl}/profiles/${updatedProfile.id}`, updatedProfile);
  }

  deleteProfile(profileId: string): Observable<any>{
    return this.http.delete(profileId);
  }

}
