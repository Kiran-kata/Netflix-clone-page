export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container">
        <p style={styles.contact}>Questions? Call 1-844-505-2993</p>
        
        <div style={styles.grid}>
          <div>
            <a href="#" style={styles.link}>FAQ</a>
            <a href="#" style={styles.link}>Investor Relations</a>
            <a href="#" style={styles.link}>Privacy</a>
            <a href="#" style={styles.link}>Speed Test</a>
          </div>
          <div>
            <a href="#" style={styles.link}>Help Center</a>
            <a href="#" style={styles.link}>Jobs</a>
            <a href="#" style={styles.link}>Cookie Preferences</a>
            <a href="#" style={styles.link}>Legal Notices</a>
          </div>
          <div>
            <a href="#" style={styles.link}>Account</a>
            <a href="#" style={styles.link}>Ways to Watch</a>
            <a href="#" style={styles.link}>Corporate Information</a>
            <a href="#" style={styles.link}>Only on Netflix</a>
          </div>
          <div>
            <a href="#" style={styles.link}>Media Center</a>
            <a href="#" style={styles.link}>Terms of Use</a>
            <a href="#" style={styles.link}>Contact Us</a>
          </div>
        </div>

        <select style={styles.lang}>
          <option>English</option>
          <option>Español</option>
        </select>

        <p style={styles.copy}>Netflix Clone - Built with React + Vite</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "70px 0 40px",
    color: "#757575",
  },
  contact: {
    marginBottom: 30,
    fontSize: "1rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 20,
    marginBottom: 30,
  },
  link: {
    display: "block",
    color: "#757575",
    textDecoration: "none",
    fontSize: "0.875rem",
    marginBottom: 12,
  },
  lang: {
    background: "black",
    color: "#757575",
    border: "1px solid #757575",
    padding: "10px 16px",
    borderRadius: 4,
    fontSize: 14,
    marginBottom: 30,
  },
  copy: {
    fontSize: "0.875rem",
  }
};
