import { ToCelciusPipe } from './to-celcius.pipe';

describe('ToCelciusPipe', () => {
  it('create an instance', () => {
    const pipe = new ToCelciusPipe();
    expect(pipe).toBeTruthy();
  });
  it('should see graden sign', () => {
  const pipe = new ToCelciusPipe();
  expect(pipe.transform(6)).toEqual('6 °C')
})
});
