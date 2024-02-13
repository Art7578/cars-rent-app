import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from "prop-types";
import Gallery from "../../components/CarList";
import Loader from "../../components/Loader";
import { Container, Button } from "./Catalog.styled";
import { fetchCatalog, setHasMore, setCurrentPage, decreaseCurrentPage } from '../../redux/slices/catalog'; 

const Catalog = ({ cars, setCars, favoriteToggle }) => {
  const dispatch = useDispatch();
  const { catalog } = useSelector(state => state.catalog);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      const fetchData = async () => {
          try {
              setIsLoading(true);
              const favoriteCars = localStorage.getItem("favs")
                  ? JSON.parse(localStorage.getItem("favs")).map((fav) => fav._id)
                  : [];
              const data = await dispatch(fetchCatalog({ page: catalog.currentPage, itemsPerPage: catalog.itemsPerPage }));
              const favoritedCars = data.map((car) => ({
                  ...car,
                  favorite: favoriteCars.includes(car._id) ? true : false,
              }));
              setCars(prevCars => [...prevCars, ...favoritedCars]);
              if (data.length < catalog.itemsPerPage) {
                  dispatch(setHasMore(false));
              }
          } catch (error) {
              setError(error.message);
          } finally {
              setIsLoading(false);
          }
      };

      fetchData();
  }, [catalog.currentPage, catalog.itemsPerPage, setCars, dispatch]);

  const loadMore = () => {
      dispatch(setCurrentPage(catalog.currentPage + 1));
  };

  const goBack = () => {
      dispatch(decreaseCurrentPage());
      dispatch(setHasMore(true));
  };

  return (
      <Container>
          {isLoading && <Loader />}
          {error && <div>{error.message}</div>}
          <Gallery cars={cars} setFavorite={favoriteToggle} />
          <div>
            {catalog.currentPage > 1 && !isLoading && <Button onClick={goBack}>Go Back</Button>} 
            {catalog.hasMore && !isLoading && <Button onClick={loadMore}>Load more</Button>}
          </div>
      </Container>
  );
};

Catalog.propTypes = {
    cars: PropTypes.array.isRequired,
    setCars: PropTypes.func.isRequired,
    favoriteToggle: PropTypes.func.isRequired,
};

export default Catalog;

