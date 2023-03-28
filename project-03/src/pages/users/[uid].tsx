import { IUserIdPageProps } from '@/common/types';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import React from 'react';

export default function UserIdPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div>
      <h1>{props.userId}</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  IUserIdPageProps,
  { uid: string }
> = async (context: GetServerSidePropsContext<{ uid: string }>) => {
  const { res, req, params } = context;

  const userId = params?.uid;
  return {
    props: {
      userId: 'userid-' + userId,
    },
  };
};
