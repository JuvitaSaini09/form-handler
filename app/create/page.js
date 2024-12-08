"use client";
import { useState } from "react";
import { useFormContext } from "@/app/context/FormContext";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";

export default function CreateForm() {
  const { updateCurrentForm, saveForm } = useFormContext();
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

  const handlePreview = () => {
    const formData = {
      title: formState.title,
      questions: formState.questions.map(q => ({
        questionText: q.questionText,
        questionType: q.type,
        options: q.type === "singleLine" ? q.options : [],
      }))
    };
    updateCurrentForm(formData);
    saveForm(formData);
  };

  return (
    <main className="w-[640px] mx-auto h-screen flex flex-col overflow-hidden">
      <Header 
        title={formState.title} 
        onTitleChange={handleTitleChange}
        isValid={formState.isValid}
        onPreview={handlePreview}
      />
      <Form 
        questions={formState.questions}
        onQuestionsChange={handleQuestionsChange}
      />
      <Footer isValid={formState.isValid} />
    </main>
  );
}
