import {
  Poster,
  Container,
  PosterContainer,
  GenreContainer,
  InfoContainer,
  CastLink,
} from './FilmCard.styled';
import { AiFillCaretLeft } from 'react-icons/ai';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';


export const FilmCard = ({ item }) => {
  const filmID = item.id;
  const location = useLocation();

  return (
    <main>
      <Link to={location?.state?.from ?? '/home'}>
        <AiFillCaretLeft />
        Go back
      </Link>
      <Container>
        <PosterContainer>
          <Poster
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt="alt"
          />
        </PosterContainer>

        <div>
          <h2>
            {item.title}({item.release_date.slice(0, 4)})
          </h2>
          <p>User score: {item.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{item.overview}</p>
          <h3>Genres</h3>
          <GenreContainer>
            {item.genres.map(item => (
              <p key={item.id}>{item.name}</p>
            ))}
          </GenreContainer>
        </div>
      </Container>

      <InfoContainer>
        <h3>Additional information</h3>
        <ul>
          <CastLink
            to={`/movies/${filmID}/cast`}
            state={{ from: location?.state?.from ?? '/' }}
          >
            Cast
          </CastLink>
          <NavLink
            to={`/movies/${filmID}/reviews`}
            state={{ from: location?.state?.from ?? '/' }}
          >
            Reviews
          </NavLink>
        </ul>
      </InfoContainer>

      <Outlet />
    </main>
  );
};


