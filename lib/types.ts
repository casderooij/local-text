export type Point = {
  lat: number;
  lon: number;
};

export type PointsWithName = Point & { name: string };
