import { useState } from "react";
import PropTypes from "prop-types";
import CarModal from "../Modal/Modal";
import DefaultImage from '../../images/img/DefaultImage.png';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites, selectFavorites } from '../../redux/slices/favorites';
import icon from "../../images/svg/sprite.svg";
import {
  CardWrap,
  ImageWrap,
  Image,
  AddFavoriteButton,
  DescriptionWrap,
  TitleWrap,
  Title,
  Description,
  CardButton,
} from "./Card.styled";

const CarCard = ({ car }) => {
  const [isOpened, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavorites);

  // Обработчик клика на кнопке AddFavoriteButton
  const handleFavoriteToggle = () => {
    const isFavorite = favoriteCars.some(favoriteCar => favoriteCar._id === car._id);

    if (isFavorite) {
      dispatch(removeFromFavorites(car._id));
    } else {
      dispatch(addToFavorites(car));
    }
  };

  const handleCloseModal = () => {
    setIsOpen(!isOpened);
  };

  const {
    address,
    rentalCompany,
    type,
    model,
    mileage,
    functionalities,
    img,
    make,
    rentalPrice,
    year,
  } = car;

  const randomFeature = Math.floor(Math.random() * functionalities.length);

  const cardScheme = [
    address.split(", ")[1],
    address.split(", ")[2],
    rentalCompany,
    type,
    model,
    mileage,
    functionalities[randomFeature],
  ];

  return (
    <CardWrap>
      <ImageWrap>
        <Image src={img ? img : DefaultImage} 
          alt={`${make} 
          ${model}`}>
        </Image>
        <AddFavoriteButton
          type="button"
          onClick={handleFavoriteToggle}
        >
          <svg className={`icon ${favoriteCars.some(favoriteCar => favoriteCar._id === car._id) ? "favorite" : ""}`}>
            <use href={`${icon}#icon-heart`}></use>
          </svg>
        </AddFavoriteButton>
      </ImageWrap>
      <DescriptionWrap>
        <TitleWrap>
          <Title>
            <span className="make">
              {make} <span className="accent">{model}</span>, {year}
            </span>
            <span className="price">{rentalPrice}</span>
          </Title>
        </TitleWrap>
        <Description>{cardScheme.join(" | ").slice(0, 95)}</Description>
      </DescriptionWrap>

      <CardButton
        type="button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Learn more
      </CardButton>
      {isOpened && <CarModal car={car} onCloseModal={handleCloseModal} />}
    </CardWrap>
  );
};

CarCard.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarCard;

