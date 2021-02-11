import styled from "styled-components";

export const Container = styled.div``;
export const ContainerButtonsPagination = styled.div`
  padding-bottom: 5rem;
  margin: 0 auto;

  .container {
    display: flex;
    justify-content: center;

    button {
      display: inline-block;
      font-size: 1.4rem;
      text-align: center;
      text-transform: uppercase;
      color: var(--white);
      line-height: 5rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 0.5rem;
      height: 5rem;
      width: auto;
      padding: 0 2rem;
      vertical-align: top;
      margin: 0 0.5rem;
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      position: relative;
      font-weight: 500;
    }
    button:hover {
      background: rgba(255, 51, 51, 0.7);
    }
    button.active {
      background: rgba(255, 51, 51, 0.7);
    }
  }
`;
export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3rem;

  .card:before {
    z-index: 10;
    content: "";
    position: absolute;
    background: #170726;

    background: -webkit-linear-gradient(
      0deg,
      rgba(23, 7, 38, 0.8659664549413515) 0,
      rgba(17, 5, 28, 0.7539216370141807) 37%,
      rgba(0, 0, 0, 0) 100%
    );
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
  .card {
    margin: 2% 2% 3% 0;
    width: 25rem;
    height: 35rem;
    cursor: pointer;

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
        display: flex;
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
`;
