"use client";

import Form from "./components/Form";
import { useState } from "react";
import Header from "./components/Header";

export default function PreviewForm() {

    const userAnswers = useState({

    });
  return (
    <main className="w-[640px] mx-auto h-screen flex flex-col overflow-hidden">
      <Header formCompletenessValue={70} />
      <Form />
    </main>
  );
} 