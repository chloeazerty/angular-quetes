import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ShoppingComponent } from './shopping/shopping.component';
import { PremiumComponent } from './premium/premium.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ShoppingComponent, PremiumComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
