"use client";
import AddSymbol from "@/app/components/icons/AddSymbol";
import React, { useState, useEffect } from "react";
import InputTypeModal from "./InputTypeModal";
import QuestionBlock from "@/app/components/ui/molecules/QuestionBlock";

const Form = ({ questions, onQuestionsChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localQuestions, setLocalQuestions] = useState([]);

  // Update local state when props change
  useEffect(() => {
    setLocalQuestions(questions);
  }, [questions]);

  const handleAddQuestion = (type) => {
    const newQuestion = {
      id: Date.now(),
      type,
      questionText: "",
      helpText: "",
      options: type === 'singleLine' ? ['', ''] : [],
      isValid: false
    };
    
    const updatedQuestions = [...localQuestions, newQuestion];
    setLocalQuestions(updatedQuestions);
    onQuestionsChange(updatedQuestions);
    setIsModalOpen(false);
  };

  const handleQuestionUpdate = (questionId, updates) => {
    const updatedQuestions = localQuestions.map(question => {
      if (question.id === questionId) {
        const updatedQuestion = { ...question, ...updates };
        // Enhanced validation including options check
        updatedQuestion.isValid = Boolean(
          updatedQuestion.questionText?.trim() && 
          (updatedQuestion.type !== 'singleLine' || 
           (updatedQuestion.options?.length >= 2 && 
            updatedQuestion.options.every(opt => opt.trim().length > 0))) // Check if options are filled
        );
        return updatedQuestion;
      }
      return question;
    });
    
    setLocalQuestions(updatedQuestions);
    onQuestionsChange(updatedQuestions);
  };

  return (
    <section className="flex-1 overflow-y-auto border-x-[1px] border-gray-200 scrollbar-hide px-6 pb-20">
      <div className="min-h-[1150px] pt-6 flex flex-col gap-6">
        {localQuestions.map((question) => (
          <QuestionBlock 
            key={question.id} 
            {...question}
            onUpdate={(updates) => handleQuestionUpdate(question.id, updates)}
          />
        ))}

        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="h-8 border-[1px] border-gray-200 rounded-xl pr-[14px] pl-4 flex items-center gap-2 hover:bg-gray-50"
          >
            <AddSymbol />
            <span>Add Question</span>
          </button>
        </div>
      </div>
      <InputTypeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleAddQuestion}
      />
    </section>
  );
};

export default Form;
