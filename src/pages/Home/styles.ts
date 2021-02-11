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
      font-size: 1.2rem;
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
  .icon-custom {
    display: none;
  }
  .text-custom {
    display: block;
  }

  @media (max-width: 500px) {
    button {
      padding: 0 1.4rem !important;
      .icon-custom {
        display: block;
      }
      .text-custom {
        display: none;
      }
    }
  }
`;
