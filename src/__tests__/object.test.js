import orderByProps from '../js/app';
import itemDesstruct from '../js/destructuring';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const objNew = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

test('Checking how a function orderByProps works with a regular array', () => {
  const received = orderByProps(obj, ['name', 'level']);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(received).toEqual(expected);
});

test('Checking how a function orderByProps works with a empty  array', () => {
  const received = orderByProps(objNew, []);
  const expected = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(received).toEqual(expected);
});

test('Checking how a function itemDesstruct works with a regular object', () => {
  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Недоступно',
    },
  ];
  expect(itemDesstruct(character)).toEqual(expected);
});
