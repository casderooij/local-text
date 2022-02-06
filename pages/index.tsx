import type { ReactElement } from 'react';
import Layout from 'components/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return <div className={styles.container}>hello world</div>;
}

Home.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
