import { useFormContext } from "@/app/context/FormContext";
import { useState, useEffect } from "react";

const Form = ({ setFormCompleteness }) => {
  const { currentForm } = useFormContext();
  const [answers, setAnswers] = useState({});

  // Calculate and update completion percentage whenever answers change
  useEffect(() => {
    const totalQuestions = currentForm.questions?.length || 0;
    const answeredQuestions = Object.values(answers).filter(answer => 
      answer !== undefined && answer !== '').length;
    const percentage = Math.round((answeredQuestions / totalQuestions) * 100);
    setFormCompleteness(percentage);
  }, [answers, currentForm.questions, setFormCompleteness]);

  // Handle input changes
  const handleInputChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const inputTypes = {
    shortAnswer: (questionId) => (
      <input
        type="text"
        placeholder=""
        value={answers[questionId] || ''}
        onChange={(e) => handleInputChange(questionId, e.target.value)}
        className="h-8 w-full rounded-lg py-[6px] px-2 border-[1px] border-gray-200 focus:ring-0 focus:outline-none focus:border-2 focus:border-gray-200"
      />
    ),
    longAnswer: (questionId) => (
      <input
        type="text"
        placeholder=""
        value={answers[questionId] || ''}
        onChange={(e) => handleInputChange(questionId, e.target.value)}
        className="h-20 w-full rounded-lg py-[6px] px-2 border-[1px] border-gray-200 focus:ring-0 focus:outline-none focus:border-2 focus:border-gray-200"
      />
    ),
    url: (questionId) => (
      <input
        type="url"
        placeholder=""
        value={answers[questionId] || ''}
        onChange={(e) => handleInputChange(questionId, e.target.value)}
        className="h-8 w-full rounded-lg py-[6px] px-2 border-[1px] border-gray-200 focus:ring-0 focus:outline-none focus:border-2 focus:border-gray-200"
      />
    ),
    number: (questionId) => (
      <input
        type="number"
        placeholder=""
        value={answers[questionId] || ''}
        onChange={(e) => handleInputChange(questionId, e.target.value)}
        className="h-8 w-full rounded-lg py-[6px] px-2 border-[1px] border-gray-200 focus:ring-0 focus:outline-none focus:border-2 focus:border-gray-200"
      />
    ),
    singleLine: (question) => (
      <div className="flex flex-col gap-3 mt-4">
        {question.options?.map((option, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={question.questionText}
              value={option}
              checked={answers[question.questionText] === option}
              onChange={(e) => handleInputChange(question.questionText, e.target.value)}
              className="w-4 h-4 border-gray-500 text-[#00AA45] focus:ring-[#1E874B] checked:border-[#1E874B] checked:bg-[#00AA45]"
            />
            <span className="text-[#0D0D0D] font-medium text-[14px]">
              {option}
            </span>
          </label>
        ))}
      </div>
    ),
  };

  return (
    <section className="flex-1 overflow-y-auto border-x-[1px] border-gray-200 scrollbar-hide px-3 sm:px-6 pb-20">
      <div className="min-h-[calc(100vh-8rem)] sm:min-h-[1150px] pt-6 flex flex-col gap-8">
        {currentForm.questions?.map((question, index) => (
          <div key={index} className="flex flex-col gap-[4px]">
            <div className="font-semibold text-xs sm:text-sm">{question.questionText}</div>
            {question.questionType === "singleLine"
              ? inputTypes[question.questionType](question)
              : inputTypes[question.questionType](question.questionText)}
          </div>
        ))}
        <div className="flex justify-end">
          <button className="h-8 border-[1px] rounded-xl pr-2 sm:pr-[14px] pl-2 sm:pl-4 flex items-center gap-1 sm:gap-2 bg-[#00AA45] border-[#1E874B]">
            <span className="text-white font-semibold text-xs sm:text-sm">Submit</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Form;
