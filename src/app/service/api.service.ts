import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getProduct(){
    return this.http.get<any>("https://mocki.io/v1/33f47037-4832-4fb8-a35c-c3febb4943ee")
      .pipe(map((res:any)=>{
        return res;
      }))
  }
}
