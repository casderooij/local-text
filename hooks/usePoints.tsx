import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactElement,
  useMemo,
} from 'react';
import { getDistance, toFixedNumber } from 'lib/utils';
import type { Point, PointsWithName } from 'lib/types';
import { pointsData } from 'lib/data';

type PointsContext = {
  current: Point | null;
  points: PointsWithName[];
  error: string | null;
};

const PointsContext = createContext<PointsContext>({
  current: null,
  points: pointsData,
  error: '',
});

export const PointsProvider = ({ children }: { children: ReactElement }) => {
  const [current, setCurrent] = useState<Point | null>(null);
  const [error, setError] = useState<string | null>(null);

  const points = useMemo(() => {
    if (!current) return pointsData;

    return pointsData.sort((a, b) => {
      const distA = getDistance(a, current);
      const distB = getDistance(b, current);
      return distA - distB;
    });
  }, [current]);

  const onChange: PositionCallback = ({ coords }) => {
    setCurrent({
      lat: toFixedNumber(coords.latitude, 6),
      lon: toFixedNumber(coords.longitude, 6),
    });
  };

  const onError: PositionErrorCallback = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) return;

    const watcher = geo.watchPosition(onChange, onError, {
      enableHighAccuracy: true,
      maximumAge: 3000,
    });

    return () => geo.clearWatch(watcher);
  }, []);

  return (
    <PointsContext.Provider value={{ current, points, error }}>
      {children}
    </PointsContext.Provider>
  );
};

const usePoints = () => useContext(PointsContext);
export default usePoints;
