import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.scss']
})
export class PremiumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isPremium:boolean=true;
  premiumList:string [] = ["Serie A","Serie B","Serie C","Serie D","Serie E","Serie F","Serie G","Serie H","Serie I","Serie J","Serie K","Serie L","Serie M","Serie N","Serie O","Serie P","Serie Q","Serie R","Serie S","Serie T","Serie U","Serie V","Serie W","Serie X","Serie Y","Serie Z"];
}
