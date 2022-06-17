import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bienvenue sur le site de Chloé !';
  
  isButtonVisible = false;
  toggleDisplay() {
    this.isButtonVisible = !this.isButtonVisible;
}
}
