import { Component, OnInit } from '@angular/core';
import { Crypto } from 'src/app/classes/crypto';
import { CryptoRecService } from 'src/app/services/crypto-rec.service';
import { CryptoRestService } from 'src/app/services/crypto-rest.service';

@Component({
  selector: 'app-crypto-rec',
  templateUrl: './crypto-rec.component.html',
  styleUrls: ['./crypto-rec.component.scss']
})
export class CryptoRecComponent implements OnInit {

  constructor(private _cryptoRestService: CryptoRestService, private _cryptoRec: CryptoRecService) { }

  cryptoList: Crypto[];
  cryptoRecList: Crypto[];

  ngOnInit(): void {
    this._cryptoRestService.getCryptoList()
    .subscribe(data=> {
      this.cryptoList = data;
      this.cryptoRecList = this._cryptoRec.getCryptoRecomm(this.cryptoList);
    });

  }

}
