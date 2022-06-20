import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { MagicOvenComponent } from './magic-oven/magic-oven.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, KitchenComponent, MagicOvenComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
