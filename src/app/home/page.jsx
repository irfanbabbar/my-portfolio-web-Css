// src/pages/index.js
import Header from '../../component/Header';
import Footer from '../../component/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container center-text">
        <h1 className='Heading'>I m irfan</h1>
        <p>Explore my projects, skills, and more.</p>
      </main>
      <Footer />
    </>
  );
}
