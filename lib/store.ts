import { atom } from 'jotai';

export type Position = {
  lat: number;
  lon: number;
};

export const siteStore = atom({ title: 'Local Text' });

export const positionStore = atom<null | Position>(null);

export const pointsStore = atom([
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
