// src/components/Footer.jsx
function Footer() {
    return (
      <footer className="text-center" style={{ padding: '1rem', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    );
  }
  
  export default Footer;
  