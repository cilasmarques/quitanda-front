import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const CardBodyText = {
  default: "default",
  black: "black",
};

export const CardMediaSizes = {
  default: "default",
  large: "large",
};

const getCardBodyText = (props) => {
  if (props.color === CardBodyText.default) {
    return "#212121";
  }

  return "#9FA2B4";
};

const getCardMediaSize = (props) => {
  if (props.color === CardMediaSizes.default) {
    return 180;
  }

  return 140;
};

//#region Card
const StyledCard = styled.div`
  background: #ffffff;
  border: 1px solid #dfe0eb;
  box-sizing: border-box;
  border-radius: 8px;

  width: 220px;
  height: 100%;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
`;

const StyledCardTitle = styled.p`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.125rem;

  text-align: center;
  letter-spacing: 0.4px;
  color: #9fa2b4;
`;

const Card = ({ title, children }) => (
  <StyledCard>
    <StyledCardTitle>{title}</StyledCardTitle>
    {children}
  </StyledCard>
);

Card.defaultProps = {
  children: undefined,
  title: "Titulo",
  size: "default",
  colorText: "default",
};

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  size: PropTypes.oneOf(Object.values(CardMediaSizes)),
  colorText: PropTypes.oneOf(Object.values(CardBodyText)),
};
//#endregion

//#region CardBody
const StyledBody = styled.div`
  padding: 16px;
  color: ${(props) => getCardBodyText(props.color)};
  height: ${(props) => getCardMediaSize(props.size)}px;

  h6 {
    margin-top: 0;
  }
`;

export const CardBody = ({ children }) => <StyledBody>{children}</StyledBody>;

CardBody.defaultProps = {
  children: undefined,
};

CardBody.propTypes = {
  children: PropTypes.node,
};
//#endregion

//#region CardMedia
const StyledMedia = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: ${(props) => getCardMediaSize(props.size)}px;
`;

export const CardMedia = ({ image, size }) => (
  <StyledMedia image={image} size={size} />
);

CardMedia.defaultProps = {
  image: undefined,
  size: "default",
};

CardMedia.propTypes = {
  image: PropTypes.string,
  size: PropTypes.string,
};
//#endregion

export default Card;
