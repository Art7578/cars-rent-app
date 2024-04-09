import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import CarCard from "../Card/Card";
import { Container } from "./CarList.styled";
import { fetchCatalog } from '../../redux/slices/catalog';

const Gallery = ({ setFavorite }) => {
    const dispatch = useDispatch();
    const { catalog } = useSelector(state => state.catalog);
    const filter = useSelector(state => state.filter); 

    const filterCars = (cars, filter) => {
        const { brand, priceFrom, priceTo, mileageFrom, mileageTo } = filter;
        return cars.filter(car => {
            const passesBrand = !brand || car.make.toLowerCase() === brand.toLowerCase();
            const passesPrice = (!priceFrom || Number(car.rentalPrice.replace('$', '')) >= Number(priceFrom.replace('$', ''))) &&
                    (!priceTo || Number(car.rentalPrice.replace('$', '')) <= Number(priceTo.replace('$', '')));
            const passesMileage = (!mileageFrom || car.mileage >= Number(mileageFrom)) &&
                                  (!mileageTo || car.mileage <= Number(mileageTo));
            return passesBrand && passesPrice && passesMileage;
        });
    };

    useEffect(() => {
        dispatch(fetchCatalog());
    }, [dispatch, filter]); // Добавляем filter в зависимости

    const carsToShow = catalog.status === 'loaded' ? filterCars(catalog.items, filter) : []; 

    return (
        <Container>
            {carsToShow.map((car, index) => (
                <li key={`${car._id}-${index}`}>
                    <CarCard car={car} setFavorite={setFavorite} />
                </li>
            ))}
        </Container>
    );
};

Gallery.propTypes = {
    setFavorite: PropTypes.func.isRequired,
};

export default Gallery;
