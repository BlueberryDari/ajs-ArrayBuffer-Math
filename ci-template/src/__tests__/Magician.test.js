import Magician from '../js/Magician';

describe('Magician', () => {
test('считает атаку мага', () => {
  const magician = new Magician ('Mag', 100);
  magician.distance = 2;
  expect(magician.attack).toBeCloseTo(90);
});

test('считает атаку мага с дурманом', () => { 
  const magician = new Magician ('Ted', 100);
  magician.stoned = true;
  magician.distance = 2;
  expect(magician.attack).toBeCloseTo(85);
});
});

