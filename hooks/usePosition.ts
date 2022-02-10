import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { positionAtom } from 'lib/store';

function usePosition() {
  const [position, setPosition] = useAtom(positionAtom);
  const [error, setError] = useState<null | string>(null);

  const onChange: PositionCallback = ({ coords }) => {
    setPosition({ lat: coords.latitude, lon: coords.longitude });
  };

  const onError: PositionErrorCallback = (error) => setError(error.message);

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }

    const watcher = geo.watchPosition(onChange, onError, {
      maximumAge: 30000,
      timeout: 27000,
    });

    return () => geo.clearWatch(watcher);
  }, []);

  return { ...position, error };
}

export default usePosition;
