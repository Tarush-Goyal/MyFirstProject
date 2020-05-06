import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { catchError } from "rxjs/operators";
import { throwError, Subject } from "rxjs";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
loggedStatus: Subject<boolean> = new Subject<boolean>();
id;

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC54eZQt9jDSwsK9KQ4MmWeoHRyi6cu0uc",
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
        catchError(errorRes=>{
          let errorMessage='An unknown error';
          if(!errorRes.error||!errorRes.error.error){

            return throwError(errorMessage);
          }
          switch (errorRes.error.error.message){
            case 'EMAIL_EXISTS':
            errorMessage='This email already exists';
          }
          return throwError(errorMessage);
        })
      )
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC54eZQt9jDSwsK9KQ4MmWeoHRyi6cu0uc',
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      ).pipe(
          catchError(errorRes=>{
            let errorMessage='An unknown error';
            if(!errorRes.error||!errorRes.error.error){
              return throwError(errorMessage);
            }
            switch (errorRes.error.error.message){
              case 'EMAIL_NOT_FOUND':
              errorMessage='This email does not exist';
              case 'INVALID_PASSWORD':
              errorMessage='Password is invalid'
            }
            return throwError(errorMessage);
          })
        )

  }

  signOut(){
//   this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyC54eZQt9jDSwsK9KQ4MmWeoHRyi6cu0uc',
// {
//   idToken: this.id
// });
console.log('deleted');
this.loggedStatus.next(false);
  }


}
