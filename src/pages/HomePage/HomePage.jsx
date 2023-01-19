import { useEffect, useState } from 'react';
import { FetchTrendingMovies } from 'API/API';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'components/Navigation/Navigation.styled';

export default function HomePage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchPictures() {
      try {
        const response = await FetchTrendingMovies();
        setList(response);
      } catch (error) {
        toast.error('Sorry,so sorry', { position: 'top-center' });
      }
    }
    fetchPictures();
  }, []);

  return (
    <>
      <main>
        <h1>Trending today</h1>
        <ul>
          {list.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </main>
      <ToastContainer autoClose={2000} />
    </>
  );
}
