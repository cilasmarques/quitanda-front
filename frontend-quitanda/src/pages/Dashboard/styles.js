import styled from "styled-components";

export const Root = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  overflow: hidden;
  flex-direction: column;
`;

export const CarouselButton = styled.button`
  padding: 0 0.3rem;
  font-size: 1.25rem;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  :hover {
    background-color: #c9c3b3;
  }
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
`