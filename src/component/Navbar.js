import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.pageName}>
        <Link to={`/`}>MOVIEWEB</Link>
      </div>
    </div>
  );
}

export default Navbar;
