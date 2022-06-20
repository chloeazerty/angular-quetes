import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Raclette party';

  isThisIngredientVital : boolean = true;

  displayGuestList: boolean = false;

  songList: string[] = ["Alejandro", "Ne me quittes pas", "Le temps est bon" ]
}

