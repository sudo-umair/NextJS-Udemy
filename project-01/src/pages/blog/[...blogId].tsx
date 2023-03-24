import { useRouter } from 'next/router';
import React from 'react';

export default function Blog() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return <div>Blog</div>;
}
