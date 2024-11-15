// src/app/projects/page.jsx
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import styles from '../../styles/Projects.module.css';

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.projectTitle}>Projects</h1>
        <p className={styles.description}>Here s a collection of my recent work.</p>
        <div className={styles.projectList}>
          <div className={styles.projectItem}>
            <img src="/calculator pic.jpg" alt="Calculator Project" className={styles.projectImage} />
            <div className={styles.projectName}>Project 1: Calculator</div>
          </div>
          <div className={styles.projectItem}>
            <img src="/todo list pic.jpg" alt="To-do List Project" className={styles.projectImage} />
            <div className={styles.projectName}>Project 2: To-do List</div>
          </div>
          <div className={styles.projectItem}>
            <img src="/website.jpg" alt="Website Project" className={styles.projectImage} />
            <div className={styles.projectName}>Project 3: Personal Website</div>
          </div>
          <div className={styles.projectItem}>
            <img src="/project 4.jpeg" alt="Website Project" className={styles.projectImage} />
            <div className={styles.projectName}>Project 4: Personal Website</div>
          </div>
          <div className={styles.projectItem}>
            <img src="/project 5.png" alt="Website Project" className={styles.projectImage} />
            <div className={styles.projectName}>Project 5: Personal Website</div>
          </div>
          <div className={styles.projectItem}>
            <img src="/project 6.png" alt="Website Project" className={styles.projectImage} />
            <div className={styles.projectName}>Project 6: Personal Website</div>
          </div>
          <div className={styles.projectItem}>
            <img src="/project 7.jpg" alt="Website Project" className={styles.projectImage} />
            <div className={styles.projectName}>Project 7: Personal Website</div>
          </div>
          <div className={styles.projectItem}>
            <img src="/project 8.png" alt="Website Project" className={styles.projectImage} />
            <div className={styles.projectName}>Project 8: Personal Website</div>
          </div>
          <div className={styles.projectItem}>
            <img src="/project 9.jpeg" alt="Website Project" className={styles.projectImage} />
            <div className={styles.projectName}>Project 9: Personal Website</div>
          </div>
          <div className={styles.projectItem}>
            <img src="/project 10.jpeg" alt="website Project" className={styles.projectImage} />
            <div className={styles.projectName}>Project 10: Personal Website</div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
