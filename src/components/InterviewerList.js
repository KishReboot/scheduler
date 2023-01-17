import React from "react";
import 'components/InterviewerList.scss'
import InterviewerListItem from "components/InterviewerListItem.js";

export default function InterviewerList(props) {

  const interviewers = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={() => props.setInterviewer(interviewer.id)}
      />
    );
  });

  return (
    <section className={"interviewers"}>
      <h4 className="interviewers__header text--light">{interviewers}</h4>
      <ul className="interviewers__list"></ul>
    </section>
  )
}