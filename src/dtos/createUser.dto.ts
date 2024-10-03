import { StringLiteral } from "typescript";

export class CreateUserDto{
    name!:String;
    email!:StringLiteral;
    age!:number;
}