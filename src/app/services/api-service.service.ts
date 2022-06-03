import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  apiUrl=environment.apiUrl;

  constructor(private http:HttpClient) { }
  requestOptions = {
    headers: new HttpHeaders({
      'Accept-Language': 'ar',
    }),
  };
  getBranchTypes():Observable<any>{
    return this.http.get(`https://backend.eizymenu.com/api/home/branch-types`,this.requestOptions)
  }

  getResturantsById(id:any):Observable<any>{
   return this.http.get(`https://backend.eizymenu.com/api/home/restaurants?branch_type_id=${id}`,this.requestOptions)
  }

  getRestaurantDetails(id:any):Observable<any>{
    return this.http.get(`https://backend.eizymenu.com/api/restaurant/${id}`,this.requestOptions)

  }


}
