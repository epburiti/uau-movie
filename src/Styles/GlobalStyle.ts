import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root {
    --white: #FFFFFF;
    --red: #FF3333;
    --black: #4E4E4E;
    --background: #fff;
    --geoit: 'geoit',sans-serif;
  }
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  html,body, #root{
    background:var(--background);
    width: 98%;
    margin: 0 auto;
  }
  *,button,input{
    border:0;
    background:none;
    margin:0;
  }
  body {
    font-size:1.6rem;
  }
  html {
  /* a cada 1rem será considera 10px */
  font-size: 62.5%;
}

`;
