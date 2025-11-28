// src/context/RegistrationContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IFormData } from '../pages/cadastro/types';
// client HTTP (axios configurado)
import { api } from '../services/api';

interface RegistrationContextData {
  currentStep: number;
  formData: Partial<IFormData>;
  updateFormData: (data: Partial<IFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;

  //função que realmente FALA COM O BACKEND
  submitRegistration: () => Promise<void>;

  isSubmitting: boolean;
}

const RegistrationContext = createContext<RegistrationContextData>({} as RegistrationContextData);

export const RegistrationProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<IFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (data: Partial<IFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const isFirstStep = currentStep === 0;
  // Assumindo 3 etapas (índices 0, 1, 2)
  const isLastStep = currentStep === 2; 

  // COMUNICAÇÃO COM O BACK
  const submitRegistration = async () => {
    setIsSubmitting(true);

    try {
      // Ajusta de acordo com o DTO do endpoint de cadastro.
      const payload = {
        name: formData.name,
        lastname: formData.lastName,
        cpf: formData.cpf,
        email: formData.email,
        password: formData.password,
      };

      // POST /users ou POST /auth/register
      await api.post('/users', payload);

    } catch (error) {
      
      console.error('Erro ao registrar usuário:', error);
      
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <RegistrationContext.Provider value={{ 
      currentStep, 
      formData, 
      updateFormData, 
      nextStep, 
      prevStep,
      isFirstStep,
      isLastStep,
      submitRegistration,
      isSubmitting,
    }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => useContext(RegistrationContext);
