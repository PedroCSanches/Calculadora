
import Test from './components/Test'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Test/>
      <Test/>
      <Test/>
    </main>
  )
}
