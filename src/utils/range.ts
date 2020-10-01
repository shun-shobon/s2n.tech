type RangeArgs = {
  start?: number;
  stop: number;
};

export default ({ start = 0, stop }: RangeArgs): Array<number> => {
  return [...Array(stop - start).keys()].map((i) => start + i);
};
