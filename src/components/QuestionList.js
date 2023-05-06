import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data.questions));
  }, []);

  const questionItems = questions.map((question) => (
    <QuestionItem key={question.id} question={question} />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;
