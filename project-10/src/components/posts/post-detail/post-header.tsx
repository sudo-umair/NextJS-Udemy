import React from 'react';
import classes from './post-header.module.css';
import Image from 'next/image';
import { IPostHeaderProps } from '@/common/types.components';

export default function PostHeader(props: IPostHeaderProps) {
  return (
    <header className={classes.header}>
      <h1>{props.title}</h1>
      <div className={classes.image}>
        <Image
          src={props.image}
          alt={props.title}
          width={200}
          height={150}
          layout='responsive'
        />
      </div>
    </header>
  );
}
