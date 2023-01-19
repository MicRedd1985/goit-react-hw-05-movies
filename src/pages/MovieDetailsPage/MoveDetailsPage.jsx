import { useParams } from 'react-router-dom';
import { MovieDetails } from 'API/API';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FilmCard } from 'components/FilmCard/FilmCard';

export default function MovieDetailsPage() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      try {
        const item = await MovieDetails(itemId);
        setItem(item);
      } catch (error) {
        toast.error('OMG! Good luck next time!', { position: 'top-center' });
      }
    }
    fetchItem();
  }, [itemId]);

  return (
    <>
      {item && <FilmCard item={item} />}
      <ToastContainer autoClose={2000} />
    </>
  );
}
