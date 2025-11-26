import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IFormData } from '../pages/cadastro/types'; // Importe seus tipos existentes

interface RegistrationContextData {
  currentStep: number;
  formData: Partial<IFormData>;
  updateFormData: (data: Partial<IFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const RegistrationContext = createContext<RegistrationContextData>({} as RegistrationContextData);

export const RegistrationProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<IFormData>>({});

  const updateFormData = (data: Partial<IFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const isFirstStep = currentStep === 0;
  // Assumindo 3 etapas (índices 0, 1, 2)
  const isLastStep = currentStep === 2; 

  return (
    <RegistrationContext.Provider value={{ 
      currentStep, 
      formData, 
      updateFormData, 
      nextStep, 
      prevStep,
      isFirstStep,
      isLastStep
    }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => useContext(RegistrationContext);