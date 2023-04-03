import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/umair.jpg'
          alt='An image showing Alex'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Umair</h1>
      <h2>FullStack Developer</h2>
      <p>
        I&apos;m a react native developer based in Rawalpindi, PK. I specialize
        in building exceptional applications, websites, and everything in
        between.
      </p>
    </section>
  );
}
