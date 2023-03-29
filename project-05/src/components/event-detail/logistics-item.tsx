import { ILogisticsItemProps } from '@/common/types';
import React, { PropsWithChildren } from 'react';
import classes from './logistics-item.module.css';

const LogisticsItem: React.FC<PropsWithChildren<ILogisticsItemProps>> = (
  props
) => {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
};

export default LogisticsItem;
