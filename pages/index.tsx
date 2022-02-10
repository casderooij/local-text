import type { ReactElement } from 'react';
import Layout from 'components/layout';
import styles from '../styles/Home.module.css';
import PointsList from 'components/PointsList';

export default function Home() {
  return (
    <div className={styles.container}>
      <PointsList />
    </div>
  );
}

Home.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
