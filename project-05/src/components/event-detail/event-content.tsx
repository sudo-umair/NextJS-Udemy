import React, { type PropsWithChildren } from 'react';
import classes from './event-content.module.css';

const EventContent: React.FC<PropsWithChildren<{}>> = (props) => {
  return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;
