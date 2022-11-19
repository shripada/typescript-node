import add, {asyncAdd} from './add';
describe('addition-tests', () => {
  it('simple addition', () => {
    expect(add(10, 23)).toBe(33);
  });
  it('async add', async () => {
    const actual = await asyncAdd(10, 20);
    expect(actual).toEqual(30);
  });
});
