import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user.entity';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private http: HttpClient) { }


  public getAsset(): Observable<User> {
    //Observable tập hợp các giá trị hoặc sự kiện trong tương lai
    // Observer 
    // Điểm khác nhau : 
    // observable là 1 funciton (class),l
    // Observer là 1 Object
    return this.http.get<User>(` http://localhost:3001/items`);
  }

  public addItem(payload: User): Observable<User> {
    return this.http.post<User>(`http://localhost:3001/items`, payload);
  }
  public deleteItem(payload: String): Observable<User> {
    return this.http.delete<User>(`http://localhost:3001/items/${payload}`);
  }
  public updateItem(payload: User, id: String): Observable<User> { 
    return this.http.put<User>(`http://localhost:3001/items/${id}`, payload);
  }
}

