export default class Character{
  constructor(name, attack) {
  this.name = name;
  this._attack = attack;
}
get attack() { //читаем значение, как св-во
  return this._attack
}

set attack(value) {
  this._attack = value;
}
}

