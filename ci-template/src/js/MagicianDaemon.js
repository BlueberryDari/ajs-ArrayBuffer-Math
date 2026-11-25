import Character from "./Character";

export default class MagicianDaemon extends Character {
  constructor(name, attack) {
    super(name, attack); //вызывает конструктор класса родителя
    
  this._distance = 1;
  this._stoned = false;
  }

get distance() {
  return this._distance;
}

  set distance(value) {
    if (!Number.isInteger(value) || value < 1) {
      throw new Error ("расстояние должно быть положительным целым числом");
    }
    this._distance = value;
  }

get stoned() {
  return this._stoned;
}

set stoned(value) {
  if (typeof value  !== 'boolean') {
    throw new Error ("значение должно быть булевым");
  }
  this._stoned = value;
}

get attack() {
  const distanceAttack = this._attack*(1-(this._distance-1)*0.1);
  if (!this._stoned) {
return distanceAttack;
  }
  return distanceAttack - Math.log2(this._distance) * 5;
}

set attack(value) {
  if (typeof value !== 'number' || value < 0 || !Number.isFinite(value)) {
    throw new Error ('Сила атаки должна быть неотрицательнымчислом');
  }
  this._attack = value;
}
}