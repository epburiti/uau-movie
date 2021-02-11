import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  padding: 3rem;
  img {
    width: 10rem;
  }
  h1 {
    margin-top: 2rem;
    font-size: 2.9rem;
    font-family: var(--geoit);
    text-transform: uppercase;
    text-align: center;
    width: 100%;
    color: #fff;
    font-weight: bold;
    opacity: 1;
    /* text-shadow: 0 0 1.5rem var(--red); */
  }

  .searchItems {
    display: flex;
    justify-content: center;
    margin-top: 8rem;
    .searchBar {
      height: 5rem;
      border-radius: 0.5rem;
      background: rgba(230, 221, 240, 0.1);
      position: relative;
    }

    .searchBar {
      width: 80%;
    }
    .icone {
      position: absolute;
      top: 13px;
      right: 20px;
    }
    input {
      position: absolute;
    }

    input,
    button {
      width: 100%;
      height: 100%;
      border: none;
      padding: 0 3rem;
      font-size: 1.8rem;
      font-weight: 300;
      color: var(--white);
      cursor: pointer;
    }
  }
  .button-custom {
    margin-left: 1%;
  }
  button {
    background: var(--red) !important;
    color: var(--white);
    border-radius: 5%;
  }
`;
