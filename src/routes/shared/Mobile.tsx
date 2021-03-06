import React from 'react'
import BottomBar from 'components/BottomBar/BottomBar'
import Header from 'components/Header/Header'
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
