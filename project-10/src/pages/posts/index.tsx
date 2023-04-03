import { IAllPostsPageProps } from '@/common/types.pages';
import AllPosts from '@/components/posts/all-posts';
import { getAllPosts } from '@/lib/posts-util';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React, { Fragment } from 'react';

export default function AllPostsPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming-related posts'
        />
      </Head>
      <AllPosts posts={props.posts} />;
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps<IAllPostsPageProps> = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 600,
  };
};
