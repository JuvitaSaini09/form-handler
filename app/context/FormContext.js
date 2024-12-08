"use client";
import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export function FormProvider({ children }) {
  const [forms, setForms] = useState([]); // For storing published/saved forms
  const [currentForm, setCurrentForm] = useState({
    title: "",
    questions: [],
  });
  
    const [formState, setFormState] = useState({
        title: "",
        questions: [],
        isValid: false
      });
    

  const updateCurrentForm = (formData) => {
    setCurrentForm(formData);
  };

  const saveForm = (form) => {
    setForms(prevForms => [...prevForms, form]);
  };

  return (
    <FormContext.Provider value={{ forms, currentForm, updateCurrentForm, saveForm,formState, setFormState }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  return useContext(FormContext);
} 
