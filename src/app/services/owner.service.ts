import { Injectable } from '@angular/core';
import {catchError, Observable, of, tap, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Owner} from "../models/owner.model";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private apiURL = 'api/owner';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
    ) { }

  getAll(): Observable<Owner[]> {
    return this.httpClient.get<Owner[]>(this.apiURL)
      .pipe(
        tap(_ => this.log('fetched owners')),
        catchError(this.handleError<Owner[]>('getAll', []))
      )
  }

  create(owner: Owner): Observable<Owner> {
    return this.httpClient.post<Owner>(this.apiURL, owner, this.httpOptions)
      .pipe(
        tap((newOwner: Owner) => this.log(`added owner w/ id=${newOwner.id}`)),
        catchError(this.handleError<Owner>('create'))
      )
  }

  find(id:number): Observable<Owner> {
    return this.httpClient.get<Owner>(`${this.apiURL}/${id}`)
      .pipe(
        tap(_ => this.log(`fetched owner id=${id}`)),
        catchError(this.handleError<Owner>(`find id=${id}`))
      )
  }

  update(owner:Owner): Observable<any> {
    return this.httpClient.put(this.apiURL, owner, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated owner id=${owner.id}`)),
        catchError(this.handleError<any>('update'))
      )
  }

  delete(id:number): Observable<Owner>{
    return this.httpClient.delete<Owner>(`${this.apiURL}/${id}`)
      .pipe(
        tap(_ => this.log(`deleted owner id=${id}`)),
        catchError(this.handleError<any>('delete'))
      )
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
