import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  background: ${(props) => props.theme.colors.primary.container};
  border-radius: 0.3rem;
  padding: 0.3rem 0.8rem 0.3rem 0.8rem;
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
