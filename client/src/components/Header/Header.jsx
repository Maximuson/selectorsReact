import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.link} to="/">
          Main
        </Link>
        <Link className={styles.link} to="/settings">
          Settings
        </Link>
      </nav>
      <div className={styles.nav}>
        <Link className={styles.link} to="/login">
          Login
        </Link>
        <Link className={styles.link} to="main">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Header;
