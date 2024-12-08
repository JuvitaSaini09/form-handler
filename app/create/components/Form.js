"use client";
import AddSymbol from "@/app/components/icons/AddSymbol";
import React, { useState } from "react";
import InputTypeModal from "./InputTypeModal";
import QuestionBlock from "@/app/components/ui/molecules/QuestionBlock";

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = (type) => {
    setQuestions([...questions, { id: Date.now(), type }]);
    setIsModalOpen(false);
  };

  return (
    <section className="flex-1 overflow-y-auto border-x-[1px] border-gray-200 scrollbar-hide px-6 pb-20">
      <div className="min-h-[1150px] pt-6 flex flex-col gap-6">
        {questions.map((question) => (
          <QuestionBlock key={question.id} type={question.type} />
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
