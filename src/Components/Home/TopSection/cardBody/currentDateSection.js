import React, { useEffect, useState } from "react";
// import {} from "bootstrap-icons";

export default function CardBodyDateSection() {
  const [data, updateData] = useState({});
  useEffect(() => {
    const currentDate = new Date();
    const currentDay = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(currentDate);
    const currentTime = new Intl.DateTimeFormat("en-US", {
      timeStyle: "medium",
    }).format(currentDate);
    const convertedDate = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
    }).format(currentDate);
    updateData({ convertedDate, currentTime, currentDay });
  }, []);
  return (
    <React.Fragment>
      <h4 className="text-light">
        {`${data.currentDay}, ${data.convertedDate}`}
      </h4>
      <h5 className="text-light">{`${data.currentTime}`}</h5>
      <p className="text-light">Refresh</p>
    </React.Fragment>
  );
}
