import { useEffect, useState } from 'react';

const Balance = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await fetch('https://avs-services-backend.onrender.com/workers', {
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch workers');
        }

        const data = await response.json();
        setWorkers(data.workers);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkers();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center">Workers' Balances</h2>
      <ul className="mt-4">
        {workers.map((worker) => (
          <li key={worker.id} className="border-b py-2">
            <p><center><strong>{worker.username}:</strong> ${worker.balance}</center></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Balance;
