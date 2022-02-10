import Head from 'next/head';
import type { ReactElement } from 'react';
import styles from './layout.module.css';
import { siteStore } from '../lib/store';
import { useAtom } from 'jotai';

export default function Layout({ children }: { children: ReactElement }) {
  const [site] = useAtom(siteStore);
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

        <footer></footer>
      </div>
    </>
  );
}
