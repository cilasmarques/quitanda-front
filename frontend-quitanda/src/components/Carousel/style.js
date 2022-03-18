import styled from "styled-components";

export const CarouselContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
  display: flex;
  width: fit-content;
`;
