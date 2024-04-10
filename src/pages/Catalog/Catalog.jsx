import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from "prop-types";
import Gallery from "../../components/CarList";
import Loader from "../../components/Loader";
import CarSearch from "../../components/CarSearch";
import { Container, Button, PageForm, PageInfo } from "./Catalog.styled";
import { fetchCatalog, setHasMore, setCurrentPage, decreaseCurrentPage } from '../../redux/slices/catalog'; 
import { setFilter, resetFilter } from '../../redux/slices/filter';
import { setFilteredCars } from '../../redux/slices/catalog'; 

const Catalog = ({ setCars, favoriteToggle }) => {
  const dispatch = useDispatch();
  const { catalog } = useSelector(state => state.catalog);
  const filter = useSelector(state => state.filter);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const filteredCars = useSelector(state => state.catalog.filteredCars);
  const [pageNumber, setPageNumber] = useState(catalog.currentPage.toString()); // Состояние для номера текущей страницы

  useEffect(() => {
    const fetchData = async () => {
        try {
            setIsLoading(true);
            const favoriteCars = localStorage.getItem("favs")
                ? JSON.parse(localStorage.getItem("favs")).map((fav) => fav._id)
                : [];
            const data = await dispatch(fetchCatalog({ 
                page: catalog.currentPage, 
                itemsPerPage: catalog.itemsPerPage,
                filter, // Передаем фильтр в запрос
            }));
            const favoritedCars = data.map((car) => ({
                ...car,
                favorite: favoriteCars.includes(car._id) ? true : false,
            }));
            setCars(favoritedCars);
            dispatch(setFilteredCars(favoritedCars)); 
            if (data.length < catalog.itemsPerPage) {
                dispatch(setHasMore(false));
            } else {
                dispatch(setHasMore(true)); // Убедимся, что флаг hasMore установлен в true, если есть еще данные
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    fetchData();
}, [catalog.currentPage, catalog.itemsPerPage, setCars, dispatch, filter]);

  useEffect(() => {
    if (filter.brand || filter.priceFrom || filter.priceTo || filter.mileageFrom || filter.mileageTo) {
      dispatch(setCurrentPage(1));
    }
  }, [filter, dispatch]);

  const loadMore = () => {
      dispatch(setCurrentPage(catalog.currentPage + 1));
  };

  const goBack = () => {
      dispatch(decreaseCurrentPage());
      dispatch(setHasMore(true)); // Установим флаг hasMore в true при возврате на предыдущую страницу
  };

  const searchCars = (searchData) => {
    dispatch(setFilter(searchData));
    dispatch(setCurrentPage(1));
  };

  const resetSearch = () => {
    dispatch(resetFilter());
    dispatch(setCurrentPage(1)); 
    dispatch(setHasMore(true)); 
  };

  const handlePageChange = (e) => {
    setPageNumber(e.target.value);
  };

  const goToPage = (e) => {
    e.preventDefault();
    dispatch(setCurrentPage(Number(pageNumber)));
  };

  return (
      <Container>
          <CarSearch onSearch={searchCars} onReset={resetSearch} />
          {isLoading && <Loader />}
          {error && <div>{error.message}</div>}
          <Gallery cars={filteredCars} setFavorite={favoriteToggle} />
          <div>
            {catalog.currentPage > 1 && !isLoading && <Button onClick={goBack}>Go Back</Button>} 
            {catalog.hasMore && !isLoading && <Button onClick={loadMore}>Load more</Button>}
          </div>
          <PageInfo>
            Page {catalog.currentPage}
          </PageInfo>
          <PageForm onSubmit={goToPage}> {/* Форма для управления номером страницы */}
            <input
              type="number"
              min="1"
              value={pageNumber}
              onChange={handlePageChange}
            />
            <button type="submit">Go</button>
          </PageForm>
      </Container>
  );
};

Catalog.propTypes = {
    setCars: PropTypes.func.isRequired,
    favoriteToggle: PropTypes.func.isRequired,
};

export default Catalog;