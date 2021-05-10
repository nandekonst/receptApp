import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable, BehaviorSubject, from, of} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {environment, varEnvironment} from '../../environments/environment'

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php"



@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http: HttpClient) {}

  getRandomRecipe(){
	  return this.http.get(API_URL)
  }
   


	

}
