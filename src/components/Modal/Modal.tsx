import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'

interface IProps {
  show: boolean
  close: () => void
  title: string
  year: string
  type: string
}

const Modal: React.FC<IProps> = ({ show, close, title, year, type }) => {
  const element = document.getElementById('modal') as HTMLElement

  return ReactDOM.createPortal(
    <div>
      {show && (
        <div className={styles.modalBackground}>
          <div className={styles.modalContainer}>
            <div className={styles.detailBox}>
              <p>제목: {title}</p>
              <p>연도: {year}</p>
              <p>타입: {type}</p>
            </div>
            <div className={styles.selectContainer}>
              <button type='button'>즐겨찾기</button>
              <button type='button' onClick={close}>
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>,
    element
  )
}

export default Modal
