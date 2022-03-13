import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  background: ${(props) => props.theme.colors.primary.container};
  border-radius: 0.3rem;
`;

export const TitleContainer = styled.div`
  h3 {
    font-family: "Mulish";
    font-style: normal;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.875rem;
    letter-spacing: 0.3px;
  }
`;

export const Controllers = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  justify-content: end;
`;
