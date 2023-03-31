import { ILayoutProps } from '@/common/types';
import { Fragment } from 'react';

import MainHeader from './main-header';

function Layout(props: ILayoutProps) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
