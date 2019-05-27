import React from 'react'
import classNames from 'classnames'
import styles from './hamburger.module.scss'

const Hamburger = ({ isInStickyHeader, onClick }) => (
  <button aria-hasppoup="menu" aria-expanded="false" aria-controls="main-menu"
    className={classNames(styles.hamburger, 'hamburger', {
      [styles.inStickyHeader]: isInStickyHeader,
    })}
    onClick={onClick}
  >
    <div className={styles.line1} />
    <div className={styles.line2} />
    <div className={styles.line3} />
  </button>
)

export default Hamburger
