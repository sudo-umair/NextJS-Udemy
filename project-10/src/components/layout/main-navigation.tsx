import Link from 'next/link';
import React from 'react';
import Logo from './logo';
import classes from './main-navigation.module.css';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link legacyBehavior={true} href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
