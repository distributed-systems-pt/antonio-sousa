import React from "react";

import { Button } from "./styled";

const ButtonComponent = (props) => (
  <>
    <Button target="_blank" href={props.link}>
      {props.children}
    </Button>
  </>
);

export default ButtonComponent;
