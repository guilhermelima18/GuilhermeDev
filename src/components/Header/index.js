import Link from 'next/link';

import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <img src="logo.png" alt="" />
        </div>
        <div className={styles.menu}>
          <Link href="/">
            Home
          </Link>
          <Link href="/portfolio">
            Portfolio
          </Link>
        </div>
      </nav>
    </header>
  );
};