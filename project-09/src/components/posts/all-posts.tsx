import React from 'react';
import PostsGrid from './posts-grid';
import classes from './all-posts.module.css';
import { IAllPostsProps } from '@/common/types.components';

export default function AllPosts(props: IAllPostsProps) {
  const { posts } = props;

  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}
