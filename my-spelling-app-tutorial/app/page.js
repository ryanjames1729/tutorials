import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spelling with CDS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className="text-blue-600">Spelling with CDS</span>
        </h1>

        <p className={styles.description}>
          Get started by trying this{' '}
          <code className={styles.code}><Link href="/quiz" className="hover:text-blue-600">quiz</Link></code>
        </p>

        <div className={styles.grid}>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <Link
          href="https://ryan-james.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by Ryan James
        </Link>
      </footer>
    </div>
  )
}