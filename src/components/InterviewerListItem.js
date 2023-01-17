import React from "react";
import classNames from "classnames";

import "components/InterviewerListItem.scss"

export default function InterviewerListItem(props) {

  const interviewer = classNames ("interviewers__item", {
    "interviewers__item--selected": props.selected
  })

  const interviewerImages = classNames("interviewers__item-image", {
    "interviewers__item--selected--image": props.selected  
  })
  return (
    <li 
      className={interviewer}
      onClick={() => props.setInterviewer(props.name)}
    >
    <img
      className={interviewerImages}
      src={props.avatar}
      alt={props.name}
    />
    {props.name}
    </li>
  )
}