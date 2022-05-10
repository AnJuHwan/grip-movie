import { SearchIcon } from 'assets';
import React from 'react'
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <SearchIcon className={styles.icon} />

      <input type='text' className={styles.input} />
      <button type='button' className={styles.search}>
        검색
      </button>
    </header>
  )
}

export default Header
