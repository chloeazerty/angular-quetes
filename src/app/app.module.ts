import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    TestComponentComponent,
    MonComposantComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }