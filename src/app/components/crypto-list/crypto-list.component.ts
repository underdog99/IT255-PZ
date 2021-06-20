import { Component, Input, OnInit } from '@angular/core';
import { Crypto } from 'src/app/classes/crypto';
import { CryptoRestService } from 'src/app/services/crypto-rest.service';


@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent implements OnInit {

  searchTerm: string;
  cryptoList: Crypto[];
  allCryptos: Crypto[];

  constructor(private _cryptoRestService: CryptoRestService) { }

  ngOnInit(): void {
    this._cryptoRestService.getCryptoList()
    .subscribe(data=> {
      this.cryptoList = data;
      this.allCryptos = this.cryptoList;
    });
  }

  search(value: string): void{
    this.cryptoList = this.allCryptos.filter((val) =>
    val.id.toLowerCase().includes(value));
  }

  colorForProc(c: Crypto): string{
    if (c.price_change_percentage_24h > 0) {
      return "green";
    } if (c.price_change_percentage_24h < 0) {
      return "red";
    } else {
      return "black";
    }
  }

}
