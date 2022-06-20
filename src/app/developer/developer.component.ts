import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //developer1: Developer =  new Developer("Doe", "John", 30, "M", "John Doe is a great developer", [new Skill("Java", "Java is a great language"), new Skill("Angular", "Angular is a great framework")]);
  }

}
