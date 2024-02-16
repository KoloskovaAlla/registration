import { validateEmail } from './validateEmail';

const dataForTests = {
  test1: {
    email: 'email123@mail.ru',
    expectedValidity: true
  },
  test2: {
    email: 'email@gmail.com',
    expectedValidity: true
  },
  test3: {
    email: 'e,mail@mail.ru',
    expectedValidity: false
  },
  test4: {
    email: 'email@m/ail.ru',
    expectedValidity: false
  },
  test5: {
    email: 'email@yandex.cn',
    expectedValidity: false
  },
  test6: {
    email: 'EMAIL@yandex.ru',
    expectedValidity: true
  },
};

describe('validateEmail:', () => {
  it('Unit test 1', () => {
    const { email, expectedValidity } = dataForTests.test1;
    const validity = validateEmail(email);
    expect(validity).toEqual(expectedValidity);
  });
  it('Unit test 2', () => {
    const { email, expectedValidity } = dataForTests.test2;
    const validity = validateEmail(email);
    expect(validity).toEqual(expectedValidity);
  });
  it('Unit test 3', () => {
    const { email, expectedValidity } = dataForTests.test3;
    const validity = validateEmail(email);
    expect(validity).toEqual(expectedValidity);
  });
  it('Unit test 4', () => {
    const { email, expectedValidity } = dataForTests.test4;
    const validity = validateEmail(email);
    expect(validity).toEqual(expectedValidity);
  });
  it('Unit test 5', () => {
    const { email, expectedValidity } = dataForTests.test5;
    const validity = validateEmail(email);
    expect(validity).toEqual(expectedValidity);
  });
  it('Unit test 6', () => {
    const { email, expectedValidity } = dataForTests.test6;
    const validity = validateEmail(email);
    expect(validity).toEqual(expectedValidity);
  });
});
