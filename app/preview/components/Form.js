import { useFormContext } from "@/app/context/FormContext";

const Form = ({}) => {

  const {currentForm} = useFormContext();
  console.log("currentForm",currentForm)
  const questions = [
    {
      questionText: "What is your gender?",
      questionType: "shortAnswer",
    },
    {
      questionText: "What is your age?",
      questionType: "longAnswer",
    },
    {
      questionText: "What is your email?",
      questionType: "url",
    },
    {
      questionText: "What is your phone number?",
      questionType: "number",
    },

    {
      questionText: "What is your name?",
      questionType: "singleLine",
      options: ["Option 1", "Option 2","Option 3"],
    },
  ];

  const inputTypes = {
    shortAnswer: (
      <input
        type="text"
        placeholder=""
        className="h-8  w-full rounded-lg py-[6px] px-2 border-[1px] border-gray-200 focus:ring-0 focus:outline-none focus:border-2 focus:border-gray-200 "
      />
    ),
    longAnswer: (
      <input
        type="text"
        placeholder=""
        className="h-20  w-full rounded-lg py-[6px] px-2 border-[1px] border-gray-200 focus:ring-0 focus:outline-none focus:border-2 focus:border-gray-200 "
      />
    ),
    url: (
      <input
      type="url"
      placeholder=""
      className="h-8  w-full rounded-lg py-[6px] px-2 border-[1px] border-gray-200 focus:ring-0 focus:outline-none focus:border-2 focus:border-gray-200 "
    />
    ),
    number: (
      <input
      type="number"
      placeholder=""
      className="h-8  w-full rounded-lg py-[6px] px-2 border-[1px] border-gray-200 focus:ring-0 focus:outline-none focus:border-2 focus:border-gray-200 "
    />
    ),
    singleLine: (question) => (
      <div className="flex flex-col gap-3 mt-4">
        {question.options?.map((option) => (
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={question.questionText}
              className="w-4 h-4 border-gray-500 text-[#00AA45] focus:ring-[#1E874B] 
              checked:border-[#1E874B] checked:bg-[#00AA45]"
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
    <section className="flex-1 overflow-y-auto border-x-[1px] border-gray-200 scrollbar-hide px-6 pb-20">
      <div className="min-h-[1150px] pt-6 flex flex-col gap-8">
        {questions.map((question) => (
          <div className="flex flex-col gap-[4px]">
            <div className="font-semibold text-sm">{question.questionText}</div>
            {question.questionType === 'singleLine' 
              ? inputTypes[question.questionType](question)
              : inputTypes[question.questionType]}
          </div>
        ))}
        <div className="flex justify-end">
          <button className="h-8 border-[1px] rounded-xl pr-[14px] pl-4 flex items-center gap-2 bg-[#00AA45] border-[#1E874B] ">
            <span className="text-white font-semibold text-sm">Submit</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Form;
