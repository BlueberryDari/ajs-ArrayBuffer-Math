import Magician from './js/Magician';
import Daemon from './js/Daemon';

const magician = new Magician('Edward', 150);
const daemon = new Daemon('Gollum', 100);

console.log('Атака мага:' , magician.attack);
console.log('Атака демона:' , daemon.attack);

magician.distance = 3;
console.log('Magician attack when distance is 3' , magician.attack);

magician.stoned = true;
console.log('к магу применен дурман, distance is 3, атака:', magician.attack);

daemon.distance = 5;
console.log('Daemon attack when distance is 5:' , daemon.attack);

daemon.stoned = true;
console.log('к демону применен дурман, distance is 5, атака:', daemon.attack);

