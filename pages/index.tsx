import type { ReactElement } from 'react';
import Layout from 'components/layout';
import styles from '../styles/Home.module.css';
import { orderedPointsByPositionAtom } from 'lib/store';
import { useAtom } from 'jotai';

export default function Home() {
  const [points] = useAtom(orderedPointsByPositionAtom);
  console.log(points);

  return <div className={styles.container}>hello world</div>;
}

Home.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
