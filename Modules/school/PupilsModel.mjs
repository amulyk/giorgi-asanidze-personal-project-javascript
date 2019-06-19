import { Validator } from '../validator.mjs';
export class PupilsModel{

    constructor(){
        this._map = new Map();
        this.pid = "";
    }

    newerror(id){
        if(!this._map.get(id)) throw new Error('There is no user with this id !');
    }

    async add(obj){
        Validator.validate(obj,pupilsSchema)
        Validator.validate2(obj)
        obj.id = Math.floor(Math.random() * 5001) + obj.name.first + Math.floor(Math.random() * 1001);
        this._map.set(obj.id, obj);
        this.pid=obj.id;
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
        Validator.validate(obj,pupilsSchema)
        Validator.validate2(obj)
        this.newerror(id);
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