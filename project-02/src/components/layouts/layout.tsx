import React, { Fragment } from 'react';
import { type PropsWithChildren } from 'react';
import MainHeader from './main-header';

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
}
