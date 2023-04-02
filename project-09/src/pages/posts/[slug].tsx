import { IPostDetailsPageProps } from '@/common/types.pages';
import PostContent from '@/components/posts/post-detail/post-content';
import { getPostData, getPostFiles } from '@/lib/posts-util';
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';
import React, { Fragment } from 'react';

export default function PostDetailsPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />;
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps<
  IPostDetailsPageProps,
  {
    slug: string;
  }
> = async (
  context: GetStaticPropsContext<{
    slug: string;
  }>
) => {
  const slug = context.params!.slug;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postFilenames = getPostFiles();

  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ''));
  const filePaths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths: filePaths,
    fallback: false,
  };
};
