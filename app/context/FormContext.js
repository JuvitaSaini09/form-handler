"use client";
import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export function FormProvider({ children }) {
  const [forms, setForms] = useState([]); // For storing published/saved forms
  const [currentForm, setCurrentForm] = useState({
    title: "",
    questions: [],
  });

  //pass question and type and optons in case of single line (radios button)
  const updateCurrentForm = (question,type,options) => {
    setCurrentForm(prev=>[...prev,{
        questionText:question,
        questionType:type,
        options:type==="singleLine"?[...options]:[],
    }]);
  };




  const saveForm = (form) => {
    setForms(prevForms => [...prevForms, form]);
  };

  return (
    <FormContext.Provider value={{ forms, currentForm, updateCurrentForm, saveForm }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  return useContext(FormContext);
} 
