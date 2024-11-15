// src/app/page.jsx
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Use styles.homeContainer + styles.left to align text to the left */}
      <main className={`${styles.homeContainer} ${styles.left}`}>
        <h2 className={styles.title}>Im Irfan Ali<br />Full Stack Developer</h2>
        <p className={styles.description}>Explore my projects, skills, and more.</p>
      </main>
      <Footer />
    </>
  );
}
