import React, { Component } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import Logo from './Logo'
import styles from './menu.module.scss'
import ebdsaLogo from '../img/ebdsa-logo@2x.png'
// import NewsletterSignup from './newsletter-signup'

class Menu extends Component {
  render() {
    return (
      <div
        className={classNames(styles.menu, {
          [styles.inDrawer]: this.props.inDrawer,
        })}
      >
        <div className={styles.closeWrapper}>
          <div className={styles.close} onClick={this.props.onClose}>
            &times;
          </div>
        </div>
        <Logo />
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}>
            <Link to="/">Latest News</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/introducing-majority/">About Majority</Link>
          </li>
          <li className={styles.menuItem}>
            <a
              href="http://eastbaydsa.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              East Bay DSA
            </a>
          </li>
        </ul>
        <img src={ebdsaLogo} alt="East Bay DSA" className={styles.ebdsaLogo} />
        {/* <NewsletterSignup /> */}
      </div>
    )
  }
}

export default Menu
