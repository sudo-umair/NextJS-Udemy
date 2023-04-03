import React, { Fragment, PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <Fragment>
      <main>{props.children}</main>
    </Fragment>
  );
};
