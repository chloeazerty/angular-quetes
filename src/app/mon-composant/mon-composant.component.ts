import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css']
})
export class MonComposantComponent implements OnInit {

  nom = "Bob";

  imageSrc = "https://via.placeholder.com/350x150";

  constructor() { }

  ngOnInit() {
  }

}