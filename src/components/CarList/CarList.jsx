import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import CarCard from "../Card/Card";
import { Container } from "./CarList.styled";
import { fetchCatalog } from '../../redux/slices/catalog';

const Gallery = ({ setFavorite }) => {
    const dispatch = useDispatch();
    const { catalog } = useSelector(state => state.catalog);
    

    React.useEffect(() => {
        dispatch(fetchCatalog());
    }, [dispatch]);

    const carsToShow = catalog.status === 'loaded' ? catalog.items : [];

    return (
        <>
            <Container>
                {carsToShow.map((car, index) => (
                    <li key={`${car._id}-${index}`}>
                        <CarCard car={car} setFavorite={setFavorite} />
                    </li>
                ))}
            </Container>
        </>
    );
};

Gallery.propTypes = {
    setFavorite: PropTypes.func.isRequired,
};

export default Gallery;
