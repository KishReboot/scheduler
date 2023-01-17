import React, { useState } from "react";

import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = () => {
    setStudent("");
    setInterviewer('null');
  }

  function cancel () {
    reset();
    props.onCancel();
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
         <input
            className="appointment__create-input text--semi-bold"
            name={props.student}
            type="text"
            onChange={(event) => setStudent(event.target.value)}
            placeholder="Enter Student Name"
            value={student}
            /*
            This must be a controlled component
            your code goes here
            */
            />
        </form>
        <InterviewerList 
          interviewers={props.interviewers} 
          value={interviewer} 
          onChange={(event) => setInterviewer(event)}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onSubmit={event => event.preventDefault()} onClick={event => props.onSave(student, interviewer)}>Save</Button>
        </section>
      </section>
    </main>
  )
}