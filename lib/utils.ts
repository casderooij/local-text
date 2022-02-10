import type { Point } from './types';

export function getDistance(a: Point, b: Point) {
  let y = b.lat - a.lat;
  let x = b.lon - a.lon;

  return Math.sqrt(x * x + y * y);
}

export function toFixedNumber(x: number, digits: number) {
  var pow = Math.pow(10, digits);
  return Math.round(x * pow) / pow;
}
