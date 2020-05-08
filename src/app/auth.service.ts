import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { catchError, map } from "rxjs/operators";
import { throwError, Subject, ReplaySubject } from "rxjs";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

export interface UserDetails {
  firstname:string;
  lastname:string;
  email:string;
  password:string;
  id:string
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
loggedStatus: Subject<boolean> = new Subject<boolean>();
private email:ReplaySubject<string>=new ReplaySubject<string>(1); //for matching email in userdetails
user: Subject<string>=new Subject<string>();

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
this.loggedStatus.next(false);
this.email.next(null);
this.user.next('Guest');
  }

  fetchData(){
    return this.http
      .get<{ [key: string]: UserDetails }>(
        'https://my-project-95bb8.firebaseio.com/form.json'
      )
      .pipe(
        map(responseData => {
          const postsArray: UserDetails[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  getEmail() {
    return this.email;
  }

}
