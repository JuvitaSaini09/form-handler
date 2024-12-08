"use client";
import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";

export default function CreateForm() {
  const [formState, setFormState] = useState({
    title: "",
    questions: [],
    isValid: false
  });

  const validateForm = (title, questions) => {
    // Basic validation
    if (title.trim().length === 0 || questions.length === 0) return false;

    // Validate each question
    return questions.every(question => {
      // Check if question has title
      if (!question.questionText?.trim()) return false;

      // Special validation for single select
      if (question.type === 'singleLine') {
        return question.options?.length >= 2 && 
               question.options.every(option => option.trim().length > 0);
      }

      return true;
    });
  };

  const handleTitleChange = (newTitle) => {
    setFormState(prevState => ({
      ...prevState,
      title: newTitle,
      isValid: validateForm(newTitle, prevState.questions)
    }));
  };

  const handleQuestionsChange = (newQuestions) => {
    setFormState(prevState => ({
      ...prevState,
      questions: newQuestions,
      isValid: validateForm(prevState.title, newQuestions)
    }));
  };

  return (
    <main className="w-[640px] mx-auto h-screen flex flex-col overflow-hidden">
      <Header 
        title={formState.title} 
        onTitleChange={handleTitleChange}
        isValid={formState.isValid}
      />
      <Form 
        questions={formState.questions}
        onQuestionsChange={handleQuestionsChange}
      />
      <Footer isValid={formState.isValid} />
    </main>
  );
}
