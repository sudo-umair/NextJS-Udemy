import React, { useEffect, useState } from 'react';
import { type ISale } from '@/common/types';
import useSwr from 'swr';

export default function LastSalesPage() {
  const [sales, setSales] = useState<ISale[]>([]);
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSwr(
    'https://next-js-course-885c7-default-rtdb.firebaseio.com/sales.json',
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      console.log(transformedSales);
      setSales(transformedSales);
    }
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch('https://next-js-course-885c7-default-rtdb.firebaseio.com/sales.json')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       const transformedSales = [];
  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }
  //       setSales(transformedSales);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (!sales) {
  //   return <p>No data found.</p>;
  // }

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sales) => (
        <li key={sales.id}>
          {sales.username} - Rs.{sales.volume}
        </li>
      ))}
    </ul>
  );
}
