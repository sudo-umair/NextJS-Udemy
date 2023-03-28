import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { type IProduct, IHomePageProps } from '@/common/types';
import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { products } = props;
  return (
    <div>
      <ul
        style={{
          listStyle: 'inside',
        }}
      >
        {products.map((product: IProduct) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  console.log('(Re)Generating static props...');
  const filePath = path.join(
    process.cwd(),
    'src',
    'data',
    'dummy-backend.json'
  );

  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData) as { products: IProduct[] };

  if (!data) {
    return {
      notFound: true,
      redirect: {
        destination: '/no-data',
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    // For incremental static generation (ISG)
    revalidate: 10,
  };
};
