import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/classes/news';
import { Update } from 'src/app/classes/update';
import { CryptoRestService } from 'src/app/services/crypto-rest.service';

@Component({
  selector: 'app-crypto-news',
  templateUrl: './crypto-news.component.html',
  styleUrls: ['./crypto-news.component.scss']
})
export class CryptoNewsComponent implements OnInit {

  public cryptoUpdate: News[] = [];
  public cryptoNews: News;

  constructor(private _cryptoRestService: CryptoRestService) { }

  ngOnInit(): void {
    this._cryptoRestService.getNews()
    .subscribe((data)=> {
      this.cryptoNews = data;
      this.cryptoUpdate.push(this.cryptoNews);
      console.log(this.cryptoUpdate);
      console.log(this.cryptoUpdate.length);
    });
  }

}
