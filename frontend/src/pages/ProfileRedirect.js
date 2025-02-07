import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:4000/profile', {
          credentials: 'include',
        });

        if (!response.ok) throw new Error('Not logged in');

        const data = await response.json();
        navigate(`/profile/${data.userId}`); // Redirect to profile/:id
      } catch (error) {
        console.error('Error:', error);
        navigate('/login'); // Redirect to login if not authenticated
      }
    };

    fetchProfile();
  }, [navigate]);

  return <p>Redirecting...</p>;
};

export default ProfileRedirect;