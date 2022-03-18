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
  if (props === CardBodyText.black) {
    return "#212121";
  }

  return "#9FA2B4";
};

const getCardMediaSize = (props) => {
  if (props === CardMediaSizes.default) {
    return 120;
  }

  return 150;
};

//#region Card
const StyledCard = styled.div`
  background: #ffffff;
  border: 1px solid #dfe0eb;
  overflow-wrap: break-word;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 8px;

  max-width: 250px;
  max-height: 250px;
  padding: 10px 30px;

  cursor: pointer;
`;

const StyledCardTitle = styled.p`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.125rem;

  text-align: center;
  letter-spacing: 0.4px;
  color: #9fa2b4;
  margin-bottom: 5px;
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
  color: ${(props) => getCardBodyText(props.color)};
  padding: 5px 0;

  p {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.4px;
  }

  h6 {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.4px;
  }
`;

export const CardBody = ({ children, color }) => (
  <StyledBody color={color}>{children}</StyledBody>
);

CardBody.defaultProps = {
  children: undefined,
  color: "default",
};

CardBody.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};
//#endregion

//#region CardMedia
const StyledMedia = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: ${(props) => getCardMediaSize(props.size)}px;
  width: ${(props) => getCardMediaSize(props.size)}px;
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
