import { Card } from "reactstrap";
import React from "react";

function CardItem(props) {
  return (
    <React.Fragment>
      <Card className={props.color ? "top-section-card-body" : ""}>
        {props.children}
      </Card>
    </React.Fragment>
  );
}

export default CardItem;
