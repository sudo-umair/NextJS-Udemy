import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { type IUserProfilePageProps } from '@/common/types';
import React from 'react';

export default function UserProfilePage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  IUserProfilePageProps
> = async (context: GetServerSidePropsContext) => {
  const { res, req, params } = context;

  console.log('Server-side rendering...');
  // console.log(req);
  // console.log(res);

  return {
    props: {
      username: 'umair',
    },
  };
};
