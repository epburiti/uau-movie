import React from "react";

import { Container } from "./styles";

const Loading = () => {
  return (
    <Container>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default Loading;
