import React, { useState } from 'react';

const QuestionForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question) return;
    onSubmit(question);
    setQuestion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ask a question:
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionForm;
