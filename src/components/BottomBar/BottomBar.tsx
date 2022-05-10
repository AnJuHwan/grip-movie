import { SearchIcon, StarIcon } from 'assets'
import React, { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './BottomBar.module.scss'
import cx from 'classnames'

const BottomBar = () => {
  const navigate = useNavigate()
  const [tab, setTab] = useState<string>('/')

  const tabClickHandler = (e: FormEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget
    setTab(name)
    navigate(name)
  }

  return (
    <footer className={styles.bottomBar}>
      <button
        type='button'
        name='/'
        className={cx(styles.tab, { [styles.active]: tab === '/' })}
        onClick={tabClickHandler}
      >
        <SearchIcon className={styles.icon} />
        <span>검색하기</span>
      </button>

      <button
        type='button'
        name='/favorite'
        className={cx(styles.tab, { [styles.active]: tab === '/favorite' })}
        onClick={tabClickHandler}
      >
        <StarIcon className={styles.icon} />
        <span>즐겨찾기</span>
      </button>
    </footer>
  )
}

export default BottomBar