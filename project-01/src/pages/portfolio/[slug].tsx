import { useRouter } from 'next/router';

function PortfolioItemPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>The Portfolio Item Page</h1>
    </div>
  );
}

export default PortfolioItemPage;
