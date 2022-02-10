import usePoints from 'hooks/usePoints';

export default function Debug() {
  const { current, error } = usePoints();

  return (
    <div>
      <p>Error: {error}</p>
      <br />
      <p>
        Current: lat: {current?.lat}, lon: {current?.lon}
      </p>
    </div>
  );
}
