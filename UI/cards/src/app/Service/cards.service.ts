import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { Card } from '../Models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseUrl = 'https://localhost:7268/api/Cards';

  constructor(private http: HttpClient) { }

  //Get All Cards

  getAllCards() : Observable<Card[]>{
    return this.http.get<Card[]>(this.baseUrl);
  }

  addCard(card: Card) : Observable<Card>{
    card.id = '00000000-0000-0000-0000-000000000000'; //Guid.Empty
    return this.http.post<Card>(this.baseUrl, card);
  }

  deleteCard(id: string) : Observable<Card>{
    return this.http.delete<Card>(this.baseUrl + '/' + id);
  }

  updateCard(card: Card): Observable<Card>{
    return this.http.put<Card>(this.baseUrl + '/' + card.id, card);
  }


}
