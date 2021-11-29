import React from "react";
import { CardBody, CardFooter } from "reactstrap";
import CardBodyDateSection from "./cardBody/currentDateSection";
import CardItem from "../../../assets/card";

export default function TopSection() {
  return (
    <CardItem color={true}>
      <CardBody className="fluid">
        <CardBodyDateSection />
      </CardBody>
      <CardFooter>
        <CardBodyDateSection />
      </CardFooter>
    </CardItem>
  );
}
