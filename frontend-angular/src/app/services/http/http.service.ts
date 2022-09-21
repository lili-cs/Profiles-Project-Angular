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

  addProfile(newProfile: any): Observable<Profile>{
    return this.http.post<Profile>(this.domainUrl + '/profiles/add', newProfile);
  }

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.domainUrl + '/profiles');
  }

  updateProfile(updatedProfile: Profile): Observable<Profile>{
    return this.http.put<Profile>(`${this.domainUrl}/profiles/${updatedProfile._id}`, updatedProfile);
  }

  deleteProfile(profileId: string): Observable<Profile>{
    return this.http.delete<Profile>(`${this.domainUrl}/profiles/${profileId}`);
  }

}
