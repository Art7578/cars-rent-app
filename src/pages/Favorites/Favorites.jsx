import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import CarCard from "components/Card/Card";
import { Container } from "./Favorites.styled";
import { selectFavorites } from '../../redux/slices/favorites';
import { Text, List } from "./Favorites.styled";

const Favorites = () => {
  const favoriteCars = useSelector(selectFavorites);

 

  return (
    <Container>
      {favoriteCars.length === 0 ? (
        <Text>You didn't choose your favorite cars</Text>
      ) : (
        <List>
          {favoriteCars.map((car, index) => (
            <li key={index}>
              <CarCard car={car} key={index}/>
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
