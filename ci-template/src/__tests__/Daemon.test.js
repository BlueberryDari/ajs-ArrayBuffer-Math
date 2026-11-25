import Daemon from '../js/Daemon';

describe('Daemon', () => {
test('считает атаку демона', () => {
  const daemon = new Daemon ('Demon', 100);
  daemon.distance = 3;
  expect(daemon.attack).toBeCloseTo(80);
});

test('считает атаку демона с дурманом', () => { 
  const daemon = new Daemon ('Ted', 100);
  daemon.stoned = true;
  daemon.distance = 2;
  expect(daemon.attack).toBeCloseTo(85);
});
});

