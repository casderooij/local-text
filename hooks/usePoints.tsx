import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactElement,
  useMemo,
} from 'react';

type Point = {
  lat: number;
  lon: number;
};

type PointsWithName = Point & { name: string };

type PointsContext = {
  current: Point | null;
  points: PointsWithName[];
};

const pointsData: PointsWithName[] = [
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
];

function getDistance(a: Point, b: Point) {
  let y = b.lat - a.lat;
  let x = b.lon - a.lon;

  return Math.sqrt(x * x + y * y);
}

export const PointsContext = createContext<PointsContext>({
  current: null,
  points: pointsData,
});

export const PointsProvider = ({ children }: { children: ReactElement }) => {
  const [current, setCurrent] = useState<Point | null>(null);

  const points = useMemo(() => {
    if (!current) return pointsData;

    return pointsData.sort((a, b) => {
      const distA = getDistance(a, current);
      const distB = getDistance(b, current);
      return distA - distB;
    });
  }, [current]);

  const onChange: PositionCallback = ({ coords }) => {
    setCurrent({ lat: coords.latitude, lon: coords.longitude });
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) return;

    const watcher = geo.watchPosition(onChange);

    return () => geo.clearWatch(watcher);
  }, []);

  return (
    <PointsContext.Provider value={{ current, points }}>
      {children}
    </PointsContext.Provider>
  );
};

export const usePoints = () => useContext(PointsContext);
