import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRegistration } from '../../../context/RegistrationContext';
import { 
    FormBody, 
    ButtonsContainer, 
    NextButton, 
    BackButton,
    TermsContainer, 
    CheckboxInput, 
    TermsText, 
    ErrorText 
} from '../styles';
import { StepTermsProps } from '../types';

const schema = yup.object({
  terms: yup.boolean().oneOf([true], 'Você precisa aceitar os termos').required()
}).required();



// USO DA INTERFACE NO COMPONENTE
export const StepTerms = ({ onFinalSubmit }: StepTermsProps) => {
  const { prevStep, formData } = useRegistration();
  
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { terms: false }
  });

  const onSubmit = (data: any) => {
    // Pega os dados do checkbox (termos)
    // Junta com os dados do contexto (formData)
    // Envia tudo para a função do pai (Cadastro/index.tsx)
    onFinalSubmit({ ...formData, ...data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <FormBody>
        <div style={{ background: '#f8f9ff', padding: '20px', borderRadius: '8px' }}>
            <h4 style={{ fontFamily: 'Montserrat', color: '#022959', margin: '0 0 10px 0' }}>Resumo</h4>
            <p style={{ fontFamily: 'Montserrat', color: '#9699aa', fontSize: '14px' }}>
                Nome: {formData.name} {formData.lastName} <br/>
                Email: {formData.email} <br/>
                CPF: {formData.cpf}
            </p>
        </div>

        <TermsContainer>
            <Controller
                name="terms"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <CheckboxInput checked={value} onChange={onChange} />
                )}
            />
            <TermsText>Li e aceito os <span>Termos e Condições</span>.</TermsText>
        </TermsContainer>
        {errors.terms && <ErrorText>{errors.terms.message}</ErrorText>}
      </FormBody>

      <ButtonsContainer>
        <BackButton type="button" onClick={prevStep}>Voltar</BackButton>
        <NextButton type="submit">Confirmar</NextButton>
      </ButtonsContainer>
    </form>
  );
};