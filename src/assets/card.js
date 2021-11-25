import { Card } from "reactstrap";
import React from "react";

function CardItem(props) {
  return (
    <React.Fragment>
      <Card>{props.children}</Card>
    </React.Fragment>
  );
}

export default CardItem;
