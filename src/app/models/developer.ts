import { Skill } from "./skill";

export class Developer {
    lastname: string;
    firstname: string;
    age: number;
    sexe: string;
    bio: string;
    skills: Skill[];

    constructor(lastname: string, firstname: string, age: number, 
        sexe: string, bio: string, skills: Skill[]) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.age = age;
        this.sexe = sexe;
        this.bio = bio;
        this.skills = skills;
    }

}