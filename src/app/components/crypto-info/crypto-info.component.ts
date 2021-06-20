import { Component, OnInit } from '@angular/core';
import { CryptoRestService } from 'src/app/services/crypto-rest.service';
import { Info } from 'src/app/classes/info';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-crypto-info',
  templateUrl: './crypto-info.component.html',
  styleUrls: ['./crypto-info.component.scss']
})
export class CryptoInfoComponent implements OnInit {

  public id: string;
  public cryptoInfo: Info[] = [];

  constructor(private _cryptoRestService: CryptoRestService, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.id = params['id'];
    });

   }

  ngOnInit(): void {
    this._cryptoRestService.getCoinInfo(this.id).subscribe((data) => {
      this.cryptoInfo.push(data);
      console.log(this.cryptoInfo);
    });
  }

}
