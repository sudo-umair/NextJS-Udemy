import FeaturedPosts from '@/components/homepage/featured-posts';
import Hero from '@/components/homepage/hero';
import { Fragment } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getFeaturedPosts } from '@/lib/posts-util';
import { IHomePageProps } from '@/common/types.pages';
import Head from 'next/head';

function HomePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Fragment>
      <Head>
        <title>Umair&apos;s Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 600,
  };
};

export default HomePage;
