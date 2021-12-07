import React from "react";

export default function CurrentDate(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function addZero(time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  }

  const date = {
    day: days[props.currentDate.getDay()],
    hours: addZero(props.currentDate.getHours()),
    minutes: addZero(props.currentDate.getMinutes()),
  };

  return (
    <span>
      {" "}
      {date.day} {date.hours}:{date.minutes}
    </span>
  );
}
