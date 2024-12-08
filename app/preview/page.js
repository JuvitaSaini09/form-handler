"use client";

import Form from "./components/Form";
import { useState } from "react";
import Header from "./components/Header";
import SuccessModal from "./components/SuccessModal";

export default function PreviewForm() {
  const [formCompleteness, setFormCompleteness] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <main className="w-full max-w-[640px] mx-auto min-h-[100dvh] h-screen flex flex-col overflow-hidden px-4 sm:px-0">
      <Header formCompletenessValue={formCompleteness} />
      <Form 
        setFormCompleteness={setFormCompleteness} 
        onSubmitSuccess={() => setShowSuccessModal(true)}
      />
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
    </main>
  );
} 