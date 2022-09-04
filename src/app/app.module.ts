import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomKomComponent } from './hom-kom/hom-kom.component';

import { ProdKomComponent } from './prod-kom/prod-kom.component';
import { CartItemKomComponent } from './cart-item-kom/cart-item-kom.component';
import { CartKomComponent } from './cart-kom/cart-kom.component';
import { ProdDetailComComponent } from './prod-detail-com/prod-detail-com.component';
import { ProdAddKomComponent } from './prod-add-kom/prod-add-kom.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const AppNavNryVar: Routes = [
  { path: '', component: HomKomComponent },
  { path: 'prod', component: ProdKomComponent },
  { path: 'prod/:NamVak', component: ProdDetailComComponent },
  { path: 'cart', component: CartKomComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CartItemKomComponent,
    CartKomComponent,
    ProdKomComponent,
    HomKomComponent,
    ProdDetailComComponent,
    ProdAddKomComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppNavNryVar),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
