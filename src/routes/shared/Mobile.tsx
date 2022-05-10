import { SearchIcon } from 'assets'
import BottomBar from 'components/BottomBar/BottomBar'
import Header from 'components/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Mobile.module.scss'

interface IProps {
  children: JSX.Element
}

const Mobile: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.mobile}>
      <Header />
      {children}
      <BottomBar />
    </div>
  )
}

export default Mobile
