import { ToCelciusPipe } from './to-celcius.pipe';

describe('ToCelciusPipe', () => {
  it('create an instance', () => {
    const pipe = new ToCelciusPipe();
    expect(pipe).toBeTruthy();
  });
});
