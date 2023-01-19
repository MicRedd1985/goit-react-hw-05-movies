import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navigation } from './Navigation/Navigation';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviePage/MoviePage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MoveDetailsPage')
);

export const App = () => {
  return (
    <>
      <Suspense fallback={''}>
        <Navigation />
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />

          <Route path="movies/:itemId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Suspense>
    </>
  );
};
