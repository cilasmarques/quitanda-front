import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 15.625rem auto;
  grid-template-rows: 4.375rem auto;
  grid-template-areas:
    "SB CT"
    "SB CT";
  height: 100vh;
  min-width: 19.6875rem;
`;

export const Content = styled.div`
  grid-area: CT;
  padding: 0.75rem 0.87rem 0.25rem 0.62rem;
`;
