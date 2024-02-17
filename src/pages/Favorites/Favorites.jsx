import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import CarCard from "components/Card/Card";
import { Container } from "./Favorites.styled";
import { selectFavorites } from '../../redux/slices/favorites';
import { selectIsAuth } from "../../redux/slices/auth";
import { Text, List } from "./Favorites.styled";

const Favorites = () => {
  const favoriteCars = useSelector(selectFavorites);
  const isAuth = useSelector(selectIsAuth);

  return (
    <Container>
      {!isAuth ? (
        <Text>You must be logged in to view your favorite cars</Text>
      ) : favoriteCars.length === 0 ? (
        <Text>You didn't choose your favorite cars</Text>
      ) : (
        <List>
          {favoriteCars.map((car, index) => (
            <li key={index}>
              <CarCard car={car} key={index} />
            </li>
          ))}
        </List>
      )}
    </Container>
  );
};

Favorites.propTypes = {
  favoriteToggle: PropTypes.func.isRequired,
};

export default Favorites;