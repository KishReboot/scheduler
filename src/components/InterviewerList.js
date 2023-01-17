import React from "react";
import 'components/InterviewerList.scss'
import InterviewerListItem from "components/InterviewerListItem.js";

export default function InterviewerList() {

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list"></ul>
    </section>
  )
}