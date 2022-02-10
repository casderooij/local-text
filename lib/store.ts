import { atom } from 'jotai';

export type Position = {
  lat: number;
  lon: number;
};

export const siteAtom = atom({ title: 'Local Text' });

export const positionAtom = atom<null | Position>(null);

export const pointsAtom = atom([
  {
    name: 'Puntbrug',
    lat: 51.918206,
    lon: 4.489464,
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
]);

export const orderedPointsByPositionAtom = atom();
