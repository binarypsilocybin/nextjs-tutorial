import Link from 'next/link';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pedrotech Next Tutorial</title>
      </Head>
      <Link href="/About"> About</Link>
      <h1>Hello world</h1>
    </div>
  );
}
