import React from 'react';
import classes from './featured-posts.module.css';
import PostsGrid from '../posts/posts-grid';
import { IFeaturedPostsProps } from '@/common/types.components';

export default function FeaturedPosts(props: IFeaturedPostsProps) {
  const { posts } = props;
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
