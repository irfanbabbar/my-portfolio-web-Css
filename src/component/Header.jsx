// src/components/Header.jsx
import Link from 'next/link';
import styles from '../styles/globals.css';

function Header() {
  return (
    <nav className="nav">
      <Link href="/">Home</Link>
      <Link href="/projects">Project Catalog</Link>
      <Link href="/skills">Skills</Link>
    </nav>
  );
}

export default Header;
