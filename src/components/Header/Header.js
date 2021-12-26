import { Link } from 'react-router-dom';

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Online Shop Api Fetch</h1>
      <ul>
        <Link to="/"><li>Online Shop</li></Link>
        <Link to="/authentication"><li>Login/Signup</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
      </ul>
    </header>
  );
}

export default Header;
