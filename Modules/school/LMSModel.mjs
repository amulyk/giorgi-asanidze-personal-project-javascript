export class LMSModel {

  constructor(){
    this._map = new Map();
  }

  newerror(obj){
    if(!this._map.get(obj.id)) return false;
    else return true;
  }

  async add(obj){
    this._map.set(obj.id, obj);
  }

  async remove(obj){
    if(this.newerror(obj)) this._map.delete(obj.id);
  }

  async update(during, obj){
    if(this.newerror(obj)){
      let curhitory = this._map.get(obj.id);
      curhitory.lessons = during;
      this._map.set(obj.id, curhitory);
    }
  }

  async verify(obj){
    if(this.newerror(obj)){
      let result = false;
      if(!this._map.get(obj.id)) result = false;
      else result=true;
      return result;
    }
    else return false;
  }

  async readAll(){
    let mas = [];
    this._map.forEach((value, key, ownMap) => {
        mas.push(value);
    });
    return mas;
  }
}