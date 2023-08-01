import ArrayBufferConverter from '../app';
import getBuffer from '../getBuffer';

test('test', () => {
  const converter = new ArrayBufferConverter();
  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  converter.load(getBuffer());

  expect(result).toEqual(converter.toString());
});
