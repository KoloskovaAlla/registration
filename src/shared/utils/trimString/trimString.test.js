import { trimString } from './trimString';

describe('trimText:', () => {
  it('Unit test 1', () => {
    expect(trimString('Что день грядущий мне готовит?', 20)).toEqual('Что день грядущий');
  });
  it('Unit test 2', () => {
    expect(trimString('Что день грядущий мне готовит?', 10)).toEqual('Что день');
  });
  it('Unit test 3', () => {
    expect(trimString('Что день грядущий мне готовит?', 17)).toEqual('Что день грядущий');
  });
  it('Unit test 4', () => {
    expect(trimString('Что день грядущий мне готовит?', 22)).toEqual('Что день грядущий мне');
  });
});
