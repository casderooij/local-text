import Head from 'next/head';
import type { ReactElement } from 'react';
import styles from './layout.module.css';

export default function Layout({ children }: { children: ReactElement }) {
  const site = {
    title: 'Local Text',
  };
  return (
    <>
      <Head>
        <title>{site.title}</title>
        <meta name="description" content="Local Text" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <header>{site.title}</header>

        <main className={styles.main}>{children}</main>

        <footer>footer</footer>
      </div>
    </>
  );
}
