// src/app/skills/page.jsx
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import styles from '../../styles/Skills.module.css';

export default function Skills() {
  return (
    <>
      <Navbar />
      <main className={`${styles.container}`}>
        <h1 className={styles.skillsTitle}>Skills</h1>
        <div className={styles.skillsGrid}>
          <div className={styles.leftColumn}>
            <div className={styles.skillItem}>JavaScript</div>
            <div className={styles.skillItem}>React</div>
            <div className={styles.skillItem}>Next.js</div>
            <div className={styles.skillItem}>Node.js</div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.skillItem}>Tailwind CSS</div>
            <div className={styles.skillItem}>TypeScript</div>
            <div className={styles.skillItem}>Figma</div>
            <div className={styles.skillItem}>CSS</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
