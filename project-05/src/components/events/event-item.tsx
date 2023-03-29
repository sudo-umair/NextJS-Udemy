import { IEventItemProps } from '@/common/types';
import React from 'react';
import Button from '../ui/button';
import styles from './event-item.module.css';
import ArrowRightIcon from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import Image from 'next/image';

export default function EventItem(props: IEventItemProps) {
  const humanReadableDate = new Date(props.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = props.location.replace(', ', '\n');

  const exploreLink = `/events/${props.id}`;

  return (
    <li className={styles.item}>
      {/* <img src={`/${props.image}`} alt='image' /> */}
      <Image src={`/${props.image}`} alt='image' width={250} height={160} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{props.title}</h2>
          <div className={styles.date}>
            <span className={styles.icon}>
              <DateIcon />
            </span>

            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <span className={styles.icon}>
              <AddressIcon />
            </span>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button type='button' link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
