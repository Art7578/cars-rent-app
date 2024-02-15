import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuth, logout } from "../../redux/slices/auth";
import {
  Container,
  Header,
  Navigation,
  NavMenu,
  NavLink,
  NavButton,
  AuthContainer,
} from "./Header.styled";

const Sidebar = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
  };

  return (
    <Container>
      <Header>
      <Navigation>
        <NavMenu>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </NavMenu>
      </Navigation>
      {isAuth ? (
        <AuthContainer>
          <NavButton onClick={handleLogout}>Log out</NavButton>
        </AuthContainer>
      ) : (
        <AuthContainer>
          <NavButton to="/registration">Registration</NavButton>
          <NavButton to="/login">Log in</NavButton>
        </AuthContainer>
        )}
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Sidebar;

