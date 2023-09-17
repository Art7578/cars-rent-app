import { Outlet } from "react-router-dom";
import {
  Container,
  Header,
  Navigation,
  NavMenu,
  NavLink,
} from "./Header.styled";

const Sidebar = () => {
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
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Sidebar;
