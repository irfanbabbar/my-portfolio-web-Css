// src/app/contact/page.jsx
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import styles from '../../styles/Contact.module.css';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.contactTitle}>Contact Me</h1>
        <form action="/submit-form" method="post" className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required className={styles.inputField} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required className={styles.inputField} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required className={styles.inputField}></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
