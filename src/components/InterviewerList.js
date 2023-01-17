import React from "react";
import 'components/InterviewerList.scss'
import InterviewerListItem from "components/InterviewerListItem.js";

export default function InterviewerList(props) {

  const interviewers = props.interviewers.map((interviewersObj) => {
    return (
      <InterviewerListItem 
        key={interviewersObj.id}
        name={interviewersObj.name}
        avatar={interviewersObj.avatar}
        selected={interviewersObj.id === props.value}
        setInterviewer={() => props.onChange(interviewersObj.id)}    
      />
    );
  });

  return (
    <section className={"interviewers"}>
      <h4 className="interviewers__header text--light">Interviewers</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  )
}