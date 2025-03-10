'use client';

import { useState } from 'react';
import SignUpForm from '@/components/SignUpForm';
import DemographicForm from '@/components/DemographicForm';
import BankLinkForm from '@/components/BankLinkForm';
import ProgressIndicator from '@/components/ProgressIndicator';

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data: any) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <ProgressIndicator currentStep={step} totalSteps={3} />
        
        {step === 1 && (
          <SignUpForm onNext={handleNext} />
        )}
        
        {step === 2 && (
          <DemographicForm onNext={handleNext} />
        )}
        
        {step === 3 && (
          <BankLinkForm onNext={handleNext} />
        )}
      </div>
    </main>
  );
}