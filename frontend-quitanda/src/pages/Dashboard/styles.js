import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SearchInput = styled.div`
  padding-right: 0.5rem;
  .search > div {
    filter: drop-shadow(0 1px #252733);
  }

  .search > div:after {
    content: "";
    background: #252733;
    width: 2px;
    height: 10px;
    position: absolute;
    top: 15px;
    right: 0px;
    transform: rotate(135deg);
  }

  .search > div > input {
    color: #252733;
    font-size: 0.8rem;
    font-weight: normal;

    background: transparent;
    width: 15px;
    height: 15px;
    padding: 0.5rem;
    border: solid 2px #252733;
    outline: none;
    border-radius: 35px;
    transition: width 0.5s;
  }

  .search > div > input::placeholder {
    color: #252733;
    opacity: 70%;
    transition: opacity 150ms ease-out;
  }

  .search > div > input:focus::placeholder {
    opacity: 1;
  }

  .search > div > input:focus,
  .search > div > input:not(:placeholder-shown) {
    width: 150px;
  }
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
