import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  margin-bottom: 0.5rem;
  background: ${(props) => props.theme.colors.primary.container};
  border-radius: 0.3rem;
  padding: 0.3rem 0.8rem 0.3rem 0.8rem;
  align-items: flex-start;
`;

export const Title = styled.div`
  span {
    font-family: "Mulish";
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.875rem;
    letter-spacing: 0.3px;
    padding-left: 0.5rem;
  }
`;
