import { add, subtract } from '../';

describe('Test entrypoint', () => {
  test('add 1 and 1', () => {
    expect(add(1, 1)).toEqual(2);
  });

  test('add 25.3 and 5.23', () => {
    expect(add(25.3, 5.23)).toEqual(30.53);
  });

  test('substract 40 from 504', () => {
    expect(subtract(504, 40)).toEqual(464);
  });
});
