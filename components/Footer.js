import styles from '../styles/Home.module.css';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <Link href="https://www.skylandtrail.org/survive-a-crisis-situation-with-dbt-distress-tolerance-skills/?gclid=CjwKCAiAsYyRBhACEiwAkJFKovMgbUgs_KCkmf1f26eB7RlCF0O7gln1mmYKLndoKvM6pL8_Xw_X2xoCASUQAvD_BwE">
          <a onClick={(e) => {
          e.preventDefault();
          window.open("https://www.skylandtrail.org/survive-a-crisis-situation-with-dbt-distress-tolerance-skills/?gclid=CjwKCAiAsYyRBhACEiwAkJFKovMgbUgs_KCkmf1f26eB7RlCF0O7gln1mmYKLndoKvM6pL8_Xw_X2xoCASUQAvD_BwE")
        }}className={styles.newFooter}>Click to learn more about DBT coping skills</a>
        </Link>

    );
  };
  
  export default Footer;
  