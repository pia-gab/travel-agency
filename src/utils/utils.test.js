import { formatTime } from './formatTime';
import {discountPrice} from './discountPrice';

describe('utils', () => {
  describe('formatTime', () => {

    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });

    it('should return null if arg is not a number', () => {
      expect(formatTime('abc')).toBe(null);
      expect(formatTime(() => {})).toBe(null);
    });

    it('should return null if arg is lower than zero', () => {
      expect(formatTime(-1)).toBe(null);
      expect(formatTime(-2)).toBe(null);
    });
    it('should return time in hh:mm:ss if arg is proper', () => {
      expect(formatTime(122)).toBe('00:02:02');
      expect(formatTime(3793)).toBe('01:03:13');
      expect(formatTime(120)).toBe('00:02:00');
      expect(formatTime(3604)).toBe('01:00:04');
    });
  });
  describe('discountPrice', () => {
    it('should return null if aarg is <0', () => {
      expect(discountPrice(-4, 1)).toBe(null);
      expect(discountPrice(1282, -555)).toBe(null);
    });
    it('should return null if arg is nan', () => {
      expect(discountPrice('lolxd', 8)).toBe(null);
      expect(discountPrice(8552, 'lolxd')).toBe(null);
    });
    it('should return null if price is null', () => {
      expect(discountPrice('')).toBe(null);
    });
    it('should return 20% lower price', () => {
      expect(discountPrice(100, 20)).toBe('80.0');
    });
  });
});
