import { Validator } from '../validator.mjs';
export class TeachersModel{

    constructor(){
        this._map = new Map();
    }

    newerror(id){
        if(!this._map.get(id)){
            throw new Error('There is no user with this id !');
        }
    }

    async add(obj){
        Validator.validate(obj,teacherSchema);
        Validator.validateDate(obj);
        Validator.validateGender(obj);
        obj.id = Math.floor(Math.random() * 5001) + obj.name.first + Math.floor(Math.random() * 1001);
        this._map.set(obj.id, obj);
        return obj.id;
    }

    async read(id){
        this.newerror(id);
        return this._map.get(id);
    }

    async remove(id){
        this.newerror(id);
        this._map.delete(id);   
    }

    async update(id, obj){
        Validator.validate(obj,teacherSchema);
        Validator.validateDate(obj);
        Validator.validateGender(obj);
        this.newerror(id);
        this._map.set(id, obj);
    }
}

const teacherSchema = {
    "name": {
        "first": "string",
        "last": "string"
    },
    "image": "string",
    "dateOfBirth": "string", 
    "emails": [
        {
        "email": "string",
        "primary": "boolean"
        }
    ],
    "phones": [
        {
        "phone": "string",
        "primary": "boolean"
        }
    ],
    "sex": "string", 
    "subjects": [
        {
        "subject": "string"
        }
    ],
    "description": "string",
  };