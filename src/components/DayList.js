import React from "react";

import DayListItem from "components/DayListItem.js";

export default function DayList(props) {

  const days = props.days.map(day => {
    return (
      <DayListItem
        key={day.id}
        selected={day.name === props.day}
        setDay={props.setDay}
        {...day}
      />
    );
  });
  
  return (
    <ul>{days}</ul>
  )
}