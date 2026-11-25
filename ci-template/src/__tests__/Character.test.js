import Character from '../js/Character';

describe('testing Character class', () => {
  test('Создает персонажа', () => {
    const character = new Character('Fred', 150);

    expect(character.name).toBe('Fred');
    expect(character.attack).toBe(150);

  });

  test('Меняет атаку', () => {
    const character = new Character('Fred', 150);
    character.attack = 200;
    expect(character.attack).toBe(200);

  })
});