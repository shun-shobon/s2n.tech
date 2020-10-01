type RangeArgs = {
  start?: number;
  stop: number;
};

export default ({ start = 0, stop }: RangeArgs): Array<number> => {
  return Array(stop - start + 1).map((_, i) => start + i);
};
