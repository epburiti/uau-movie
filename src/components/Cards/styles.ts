import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3rem;
  .card:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);

    .note button {
      opacity: 1;
    }
  }

  .card:before {
    z-index: 10;
    content: "";
    position: absolute;
    /* background: #170726; */

    background: linear-gradient(
      0deg,
      rgba(23, 7, 38, 0.8659664549413515) 0,
      rgba(17, 5, 28, 0.7539216370141807) 37%,
      rgba(0, 0, 0, 0) 100%
    );
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    opacity: 0.8;
  }
  .card:hover:before {
    background: linear-gradient(
      0deg,
      rgba(23, 7, 38, 1) 0,
      rgba(17, 5, 28, 1) 37%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .card {
    margin: 2% 2% 3% 0;
    width: 25rem;
    height: 35rem;
    cursor: pointer;
    transition: all 0.3s ease;

    img {
      border-radius: 1rem;
      width: 100%;
      height: 100%;
    }

    vertical-align: top;
    text-align: left;
    position: relative;

    .infos {
      width: 100%;
      height: auto;
      position: absolute;
      bottom: -1rem;
      left: 0;
      padding: 15px;
      z-index: 20;
      transition: all 0.1s ease-in-out;
      span {
        color: white;
        display: block;
        font-weight: bold;
        font-size: 1.6rem;
        color: #fff;
        text-transform: uppercase;
        margin-bottom: 0;
      }
      .card-type {
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
      }
      .card-type p,
      .card-date {
        font-size: 1.1rem;
        font-weight: 400;
        opacity: 0.8;
        color: white;
        margin-bottom: 10px;
        display: block;
      }
    }
  }

  .note button {
    /* box-shadow: 0px 0px 16px #c80de0;
     */
    transition: all 0.3s ease;
    outline: none;
    border: 0.2rem solid white;
    color: white !important;
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    /* background: rgba(255, 51, 51, 0.7); */
    font-weight: bold;
    position: absolute;
    right: 10rem;
    bottom: 17.5rem;
    z-index: 10;
    opacity: 0;
  }

  h1 {
    color: var(--white);
  }
`;
