import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { CryptoRecComponent } from './components/crypto-rec/crypto-rec.component';
import { CryptoNewsComponent } from './components/crypto-news/crypto-news.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CryptoRestService } from './services/crypto-rest.service';
import { CryptoInfoComponent } from './components/crypto-info/crypto-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './filter/filter-pipe.pipe';


const routes: Routes = [
  { path: '', redirectTo: 'cryptoList', pathMatch: 'full' },
  { path: 'cryptoList', component: CryptoListComponent },
  { path: 'cryptoRec', component: CryptoRecComponent },
  { path: 'cryptoNews', component: CryptoNewsComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'cryptoInfo/:id', component: CryptoInfoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CryptoListComponent,
    CryptoRecComponent,
    CryptoNewsComponent,
    ContactComponent,
    CryptoInfoComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CryptoRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
