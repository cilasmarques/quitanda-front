import styled from "styled-components";
import { Wrapper } from "../../components/Container/styles";

export const Root = styled.div`
  padding: 20px;
  height: 100%;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 220px;
    letter-spacing: 15px;
  }
  span {
    text-align: center;
    display: block;
    position: relative;
    font-size: 20px;
    padding-bottom: 1rem;
  }
`;

export const StyledContainer = styled(Wrapper)`
  align-items: center;
  justify-content: center;
  height: 100%;
`;
