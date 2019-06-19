import { Validator } from '../validator.mjs';
export class SubjectsModel{
    constructor(obj){
        Validator.validate(obj,schema);
        this.title = obj.title;
        this.lessons = obj.lessons;
        this.description = obj.description;
        this.id = Math.floor(Math.random() * 5001) + obj.title + Math.floor(Math.random() * 1001);

        if(typeof this.title != "string" || typeof this.lessons != "number" || !obj.lessons || !obj.title){
            throw new Error('Invalid Parameter!!!');
        }
    }
}  

const schema = {
    "title": "string",
    "lessons": "number",
    "description": "string"
}