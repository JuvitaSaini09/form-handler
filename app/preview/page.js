"use client";

import Form from "./components/Form";
import { useState } from "react";
import Header from "./components/Header";

export default function PreviewForm() {
  const [formCompleteness, setFormCompleteness] = useState(0);

  return (
    <main className="w-[640px] mx-auto h-screen flex flex-col overflow-hidden">
      <Header formCompletenessValue={formCompleteness} />
      <Form setFormCompleteness={setFormCompleteness} />
    </main>
  );
} 