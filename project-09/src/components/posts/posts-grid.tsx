import React from 'react';
import PostItem from './post-item';
import classes from './posts-grid.module.css';
import type { IPostGridProps } from '@/common/types.components';

export default function PostsGrid(props: IPostGridProps) {
  return (
    <ul className={classes.grid}>
      {props.posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
