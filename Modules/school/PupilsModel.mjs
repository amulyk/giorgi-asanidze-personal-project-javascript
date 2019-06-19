import { Validator } from '../validator.mjs';
export class PupilsModel{

    constructor(){
        this._map = new Map();
        this.id = "";
    }

    checkExistence(id){
        if(!this._map.get(id)){
            throw new Error('There is no user with this id !');
        }
    }

    async add(obj){
        Validator.validate(obj,pupilsSchema);
        Validator.validateDate(obj);
        Validator.validateGender(obj);
        this.id = Math.floor(Math.random() * 5001) + obj.name.first + Math.floor(Math.random() * 1001);
        obj.id = this.id
        this._map.set(obj.id, obj);
        return obj.id;
    }

    async read(id){
        this.checkExistence(id);
        return this._map.get(id);
    }

    async remove(id){
        this.checkExistence(id);
        this._map.delete(id);
    }

    async update(id, obj){
        Validator.validate(obj,pupilsSchema);
        Validator.validateDate(obj);
        Validator.validateGender(obj);
        this.checkExistence(id);
        this._map.set(id, obj);
    }
}

const pupilsSchema = {
    "name": {
      "first": "string",
      "last": "string"
    },
    "image": "string",
    "dateOfBirth": "string", // format date
    "phones": [
      {
        "phone": "string",
        "primary": "boolean"
      }
    ],
    "sex": "string", // male OR female
    "description": "string"
  }