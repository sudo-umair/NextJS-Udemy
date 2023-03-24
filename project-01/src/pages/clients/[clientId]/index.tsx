import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h2>
        This page holds all the projects done with the client{' '}
        <span
          style={{
            color: 'red',
          }}
        >
          {router.query.clientId}
        </span>
      </h2>
    </div>
  );
}
