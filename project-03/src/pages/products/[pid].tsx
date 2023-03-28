import React, { Fragment } from 'react';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  GetStaticPaths,
} from 'next';
import { IProduct, IProductPageProps } from '@/common/types';
import path from 'path';
import fs from 'fs/promises';

export default function ProductPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  if (!props.loadedProduct) {
    return <p>Loading...</p>;
  }
  // no need for the above if we use fallback: 'blocking' in getStaticPaths

  return (
    <Fragment>
      <h1>{props.loadedProduct?.title}</h1>
      <p>{props.loadedProduct?.description}</p>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(
    process.cwd(),
    'src',
    'data',
    'dummy-backend.json'
  );

  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData) as { products: IProduct[] };

  return data;
}

export const getStaticProps: GetStaticProps<
  IProductPageProps,
  { pid: string }
> = async (context: GetStaticPropsContext<{ pid: string }>) => {
  const { params } = context;

  const productId = params?.pid;

  const data = await getData();

  const product = data.products.find((p: IProduct) => p.id === productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getData();
  const ids: string[] = data.products.map((p: IProduct) => p.id);

  const pathsWithParams = ids.map((id: string) => ({ params: { pid: id } }));
  return {
    paths: pathsWithParams,
    // fallback: 'blocking',
    fallback: true,
  };
};
