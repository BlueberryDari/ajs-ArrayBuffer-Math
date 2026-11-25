import MagicianDaemon from "../js/MagicianDaemon";

describe('MagicianDaemon', () => {
  let character;

  beforeEach(() => {
    character = new MagicianDaemon('Leo', 100);
  });

  test('Создаёт персонажа со значениями по умолчанию', () => {
    expect(character.stoned).toBe(false);
    expect(character.attack).toBe(100);
  });

  test('Считает силу атаки с учётом расстояния', () => {
    const distances = [
      [1, 100],
      [2, 90],
      [3, 80],
      [4, 70],
      [5, 60],
      [6, 50],
      [7, 40],
      [8, 30],
      [9, 20],
      [10, 10],
    ];


    distances.forEach(([distance, expectedAttack]) => {
      character.distance = distance;
      expect(character.attack).toBeCloseTo(expectedAttack);
    });
  });

  test('Считает атаку с учётом расстояния и состояния "stoned"', () => {
character.stoned = true;
character.distance = 2;
expect(character.attack).toBeCloseTo(85);
  });

  test('обновляет атаку', () => {
    character.attack = 200;
    expect(character.attack).toBe(200);
  });
test ('обновляет расстояние', () => {
  character.distance = 5;
  expect(character.distance).toBe(5);
  expect(character.attack).toBeCloseTo(60);
  
});
test('выключает дурман', () => {
character.stoned = true;
character.stoned = false;
expect(character.stoned).toBe(false);
expect(character.attack).toBeCloseTo(100);
});
test('выбрасывает ошибку при неположительном нецелом расстоянии', () => {
  expect(() => {
    character.distance = -1;
  }).toThrow(Error);
  expect(() => {
    character.distance = 0;
  }).toThrow(Error);
  expect(() => {
    character.distance = 1.5;
  }).toThrow(Error);

});

test('выбрасывает ошибку если дурман не булевый', () => {
expect(() => {
  character.stoned = 'true';
}).toThrow(Error);
})

test('выбрасывает ошибку при неверном значении атаки', () => {
  expect(() => {
    character.attack = 'strong';
  }).toThrow(Error);
  expect(() => {
    character.attack = -10;
  }).toThrow(Error);
  expect(() => {
    character.attack = null;
  }).toThrow(Error);
expect(() => {
  character.attack = Infinity;
  }).toThrow(Error);
});


});