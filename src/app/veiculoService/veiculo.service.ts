import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Veiculo } from '../veiculo/veiculoInterface/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private apiURL = "http://localhost:8080";

  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/veiculos/todos')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/veiculos/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  verVeiculo(id:number): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/veiculos/view' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  create(veiculo:Veiculo): Observable<any> {
  
    return this.httpClient.post(this.apiURL + '/veiculos/save', JSON.stringify(veiculo), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  
  update(id:number, veiculo:Veiculo): Observable<any> {
    return this.httpClient.put(this.apiURL + '/veiculos/update' + id, JSON.stringify(veiculo), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }
       
  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/veiculos/apagar' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  /** 
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
