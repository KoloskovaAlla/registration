import { validateTel } from './validateTel';

describe('validateTel:', () => {
  it('Unit test 1', () => {
    expect(validateTel('0123456789')).toEqual(true);
  });
  it('Unit test 2', () => {
    expect(validateTel('01234567890')).toEqual(false);
  });
  it('Unit test 3', () => {
    expect(validateTel('012345678')).toEqual(false);
  });
  it('Unit test 4', () => {
    expect(validateTel('012a456789')).toEqual(false);
  });
  it('Unit test 5', () => {
    expect(validateTel('012a456.89')).toEqual(false);
  });
});
