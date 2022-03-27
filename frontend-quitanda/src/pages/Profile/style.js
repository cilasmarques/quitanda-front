import styled from "styled-components";

export const Root = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 0.5rem;
`;

export const ProductContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1.8rem;
  padding-bottom: 0.5rem;
  overflow: overlay;
  /* align-items: center; */
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 2500px) {
    max-height: 58ch;
  }
  @media only screen and (max-width: 1600px) {
    max-height: 28ch;
  }
  @media only screen and (max-width: 1200px) {
    max-height: 24ch;
  }
`;

export const Description = styled.div`
  color: ${(props) => props.theme.colors.primary.black};
  margin: 0.8rem 0 0 0.5rem;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 1.12rem;
  letter-spacing: 0.4px;
  white-space: normal;
  display: flex;
  flex-direction: column;
  width: 350px;
`;

export const AddressInfo = styled.div`
  flex-direction: column;
  display: flex;
  padding: 10px 0;
`;

export const SocialNetworkInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AdminInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Controllers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
  row-gap: 5px;
`;
