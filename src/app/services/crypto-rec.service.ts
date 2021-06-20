import { Injectable } from '@angular/core';
import { Crypto } from '../classes/crypto';

@Injectable({
  providedIn: 'root'
})
export class CryptoRecService {

  getLink: string;

  constructor() { }

  getCryptoRecomm(list: Crypto[]): Crypto[]{
    var listRec: Crypto[] = [];


    for (let i = 0; i < 10; i++) {
      var r = Math.floor((Math.random() * 100) + 1);
      listRec.push(list[r]);
    }

    return listRec;
  }

}
