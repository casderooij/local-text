import usePoints from 'hooks/usePoints';

export default function PointsList() {
  const { points } = usePoints();

  return (
    <ul>
      {points && points.map((point) => <li key={point.name}>{point.name}</li>)}
    </ul>
  );
}
