import type { ReactElement } from 'react';
import Layout from 'components/layout';
import styles from '../styles/Home.module.css';
import PointsList from 'components/PointsList';
import Debug from 'components/Debug';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>LOCAL TEXT</h1>
      <PointsList />
      <Debug />
    </div>
  );
}

Home.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
