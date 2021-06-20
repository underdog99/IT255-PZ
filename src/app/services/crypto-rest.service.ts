import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Info } from '../classes/info';
import { Update } from '../classes/update';
import { News } from '../classes/news';

@Injectable({
  providedIn: 'root'
})
export class CryptoRestService {

  getLink: string;

  constructor(private http: HttpClient) { }

  getCryptoList(): Observable<any>{
    return this.http.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  }

  getCoinInfo(id: string): Observable<Info>{
    //let params1 = new HttpParams().set('id', id);
    this.getLink = "https://api.coingecko.com/api/v3/coins/" + id;
    console.log(this.getLink);
    return this.http.get(this.getLink).pipe(map((data: any) => this._createInfoFromObject(data)));
  }

  getNews(): Observable<News>{
    return this.http.get("https://api.coingecko.com/api/v3/status_updates").pipe(map((data: any) => this._createNewFromObject(data)));
  }

  private _createInfoFromObject(item: any){
    return new Info(item.id, item.symbol, item.name, item.block_time_in_minutes, item.hashing_algorithm, item.public_notice, item.description, item.high_24h, item.low_24h);
  }

  private _createNewFromObject(item: any){
    return new News(item.description, item.category, item.created_at, item.user, item.user_title, item.project);
  }


}
