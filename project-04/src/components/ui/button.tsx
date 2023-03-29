import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { type IButtonProps } from '@/common/types';
import styles from './button.module.css';

const Button: React.FC<PropsWithChildren<IButtonProps>> = (props) => {
  if (props.link) {
    return (
      <Link legacyBehavior href={props.link}>
        <a className={styles.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
