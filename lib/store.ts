import { atom } from 'jotai';

export type Position = {
  lat: number;
  lon: number;
};

type PositionWithName = Position & { name: string };

export const siteAtom = atom({ title: 'Local Text' });

export const positionAtom = atom<null | Position>(null);

export const pointsAtom = atom<PositionWithName[]>([
  {
    name: 'Puntbrug',
    lat: 51.918206,
    lon: 4.489464,
  },
  {
    name: 'Rechter Maasover',
    lat: 51.921202,
    lon: 4.498164,
  },
  {
    name: 'Wijnhaven',
    lat: 51.918785,
    lon: 4.492126,
  },
  {
    name: 'Spanjaardsbrug',
    lat: 51.919324,
    lon: 4.493246,
  },
  {
    name: 'Blue City',
    lat: 51.919583,
    lon: 4.501198,
  },
]);

function getDistance(a: Position, b: Position | null) {
  if (!b) return 0;

  let y = b.lat - a.lat;
  let x = b.lon - a.lon;

  return Math.sqrt(x * x + y * y);
}

export const orderedPointsByPositionAtom = atom((get) =>
  get(pointsAtom).sort((point) => getDistance(point, get(positionAtom)))
);
