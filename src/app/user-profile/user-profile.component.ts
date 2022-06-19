import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  User: User = new User (
   'Doe',
   'John',
   'https://randomuser.me/api/portraits/lego/2.jpg',
    25,
   'We know what we are, but not what we may be'
  
  );
  
  constructor() { }

  ngOnInit(): void {
  }

  isButtonVisible = false;
  toggleDisplay(): void {
  this.isButtonVisible = !this.isButtonVisible;
}
  
}
