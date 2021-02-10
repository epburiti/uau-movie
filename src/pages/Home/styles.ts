import styled from "styled-components";

export const Container = styled.div``;
export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;

  .card:before{
  z-index: 10;
    content: "";
    position: absolute;
    background: #170726;

    background: -webkit-linear-gradient(
    0deg
    ,rgba(23,7,38,.8659664549413515) 0,rgba(17,5,28,.7539216370141807) 37%,rgba(0,0,0,0) 100%);
    background: linear-gradient(
    0deg
    ,rgba(23,7,38,.8659664549413515) 0,rgba(17,5,28,.7539216370141807) 37%,rgba(0,0,0,0) 100%);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    opacity: .8;
}
  .card {
    margin: 2% 2% 3% 0;
    width: 25rem;
    height: 35rem;
    cursor:pointer;


    img {
    border-radius: 1rem;
      width: 100%;
      height: 100%;
    }

    vertical-align: top;
    text-align: left;
    position: relative;

    .infos{
      width: 100%;
      height: auto;
      position: absolute;
      bottom: -1rem;
      left: 0;
      padding: 15px;
      z-index: 20;
      -webkit-transition: all .1s ease-in-out;
      -o-transition: all .1s ease-in-out;
      transition: all .1s ease-in-out;
      span{
        color:white;
        display: block;
        font-weight:bold;
        font-size: 1.6rem;
        color: #fff;
        text-transform: uppercase;
        margin-bottom: 0;
      }
      .card-type, .card-date {
        font-size: 1.1rem;
        font-weight: 400;
        opacity: .8;
        color:white;
        margin-bottom: 10px;
        display: block;
      }
}
    }
  }
`;
