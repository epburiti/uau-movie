import styled from "styled-components";

export const Container = styled.div`
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
    color: var(--black);
    font-weight: bold;
    opacity: 1;
    /* text-shadow: 0 0 15px var(--red); */
  }

  .searchItems {
    display: flex;
    margin-top: 8rem;
    .searchBar,
    .selectContainer {
      height: 5rem;
      border-radius: 0.5rem;
      background: rgba(255, 51, 51, 0.3);
      position: relative;
    }
    .selects {
      width: 30%;
      .selectContainer {
        width: 100%;
        margin-left: 1%;
        .options {
          background-color: rgba(0, 0, 0, 0.1);
          font-size: 1.4rem;
        }
        select {
          .options:checked {
            color: #fff;
            font-weight: bold;
            opacity: 1;
            text-shadow: 0 0 15px #9c5cbd;
          }

          .options {
            text-transform: uppercase;
            cursor: pointer;
            background: #5041c3;
            color: var(--white);
            font-weight: 400;
          }
        }
      }
    }
    .searchBar {
      width: 50%;
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
    select,
    button {
      width: 100%;
      height: 100%;
      background: 0 0;
      border: none;
      padding: 0 3rem;
      font-size: 1.8rem;
      font-weight: 300;
      color: var(--black);
      cursor: pointer;
    }
  }
  .button-custom {
    margin-left: 1%;
  }
  button {
    background: var(--red) !important;
    color: var(--white) !important;
    border-radius: 5%;
  }
`;
