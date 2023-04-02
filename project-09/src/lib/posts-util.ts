import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { IPost, IPostData } from '@/common/types';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export function getPostData(postIdentifier: string): IPostData {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    content,
    ...(data as IPost),
  };

  return postData;
}

export function getPostFiles(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getAllPosts(): IPost[] {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedPosts;
}

export function getFeaturedPosts(): IPost[] {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
