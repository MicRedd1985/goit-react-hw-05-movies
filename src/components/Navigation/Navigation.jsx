import { Header, Nav, Link } from './Navigation.styled';
import { Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <Header>
        <Nav>
          <Link to="/home">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
};
