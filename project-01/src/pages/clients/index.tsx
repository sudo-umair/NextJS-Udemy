import Link from 'next/link';

const clients = [
  {
    id: 'umair',
    name: 'Umair',
  },
  {
    id: 'ali',
    name: 'Ali',
  },
  {
    id: 'ahmed',
    name: 'Ahmed',
  },
];

function ClientsPage() {
  return (
    <div>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              // href=`/clients/${client.id}`
              href={{
                pathname: '/clients/[clientId]',
                query: { clientId: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
