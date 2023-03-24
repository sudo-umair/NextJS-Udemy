import Link from 'next/link';
import { useRouter } from 'next/router';

function HomePage() {
  const router = useRouter();

  const navigateToClients = () => {
    router.push('/clients/umair/33');
  };
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link href='/clients'>Clients</Link>
          </li>
          <li>
            <Link href='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link
              href={{
                pathname: '/about',
              }}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={navigateToClients}>Clients</button>
    </div>
  );
}

export default HomePage;
