import React from "react";
import "./seat.css";

export const Seat = ({ isBooked, number }) => {
  let seatClass = isBooked;
  return <div className={`seat ${seatClass}`}>{number}</div>;
};
