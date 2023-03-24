import { useRouter } from 'next/router';
import React from 'react';

export default function SelectedProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h2>SelectedProjectPage</h2>
    </div>
  );
}
