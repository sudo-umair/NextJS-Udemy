import { IEventsSearchProps } from '@/common/types';
import Button from '@/components/ui/button';
import React, { useRef } from 'react';
import styles from './events-search.module.css';

export default function EventsSearch(props: IEventsSearchProps) {
  const yearRef = useRef<HTMLSelectElement>(null);
  const monthRef = useRef<HTMLSelectElement>(null);

  const findEventsHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const selectedYear = yearRef.current?.value;
    const selectedMonth = monthRef.current?.value;
    props.onSearch(selectedYear as string, selectedMonth as string);
  };

  return (
    <form onSubmit={findEventsHandler} className={styles.form}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor='year'>Year</label>
          <select ref={yearRef} id='year'>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor='month'>Month</label>
          <select ref={monthRef} id='month'>
            <option value='1'>January</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>June</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>September</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
        </div>
      </div>

      <Button type='submit'>Find Events</Button>
    </form>
  );
}
