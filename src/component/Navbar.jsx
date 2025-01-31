// src/components/Navbar.jsx
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">My Portfolio</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
