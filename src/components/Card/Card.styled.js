import styled from "styled-components";

export const CardWrap = styled.div`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 21px;
  background: #fff;
  border-radius: 14px;
  padding: 10px;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 14px;
  overflow: hidden;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const Image = styled.img`
  position: absolute;
  width: 274px;
	height: 268px;
  object-fit: cover;
`;

export const AddFavoriteButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: none;

  & .icon {
    width: 18px;
    height: 18px;
    stroke: #fff;
    fill: transparent;

    &:hover,
    &:focus {
      stroke: #3470ff;
      fill: #3470ff;
    }

    &.favorite {
      stroke: #3470ff;
      fill: #3470ff;
    }
  }
`;

export const RemoveFavoriteButton = styled.button`
  color: #fff;
  border: 1px solid transperent;
  border: 50%;
  background-color: white;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;

  &:hover {
    background-color: #e04141;
  }
`;

export const TitleWrap = styled.div`
  width: 265px;
`;

export const DescriptionWrap = styled.div`
  display: flex;
  margin-bottom: 28px;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;

  & .make {
    display: inline-block;
  }

  & .accent {
    color: #3470ff;
  }

  & .price {
    padding-left: 12px;
    display: inline-block;
  }
`;

export const Description = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const CardButton = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px;
  justify-content: center;
  align-items: center;

  border-color: transparent;
  border-radius: 12px;
  background: #3470ff;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;

  cursor: pointer;

  &:hover {
    background-color: #0b44cd;
    transition: 0.5s;
  }
`;
