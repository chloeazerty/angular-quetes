export class User {

    firstname: string;
    lastname: string;
    image: string;
    age: number;
    quote: string;
  
    constructor(firstname: string, lastname: string, image: string, age: number, quote: string){
      this.firstname = firstname;
      this.lastname = lastname;
      this.image = image;
      this.age = age;
      this.quote = quote;
    } 
  }