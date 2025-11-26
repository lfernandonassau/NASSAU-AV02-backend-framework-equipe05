import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRegistration } from '../../../context/RegistrationContext';
import { Input } from '../../../components/Input'; 
import { cpfMask } from '../../../utils/cpfMask';
import { nameMask } from '../../../utils/nameMask'; 
import { 
    FormBody, 
    ButtonsContainer, 
    NextButton, 
    Label,
    ErrorText
} from '../styles';

const schema = yup.object({
  cpf: yup.string().min(14, 'CPF inválido').required('Campo obrigatório'),
  name: yup.string().min(3, 'Nome inválido').required('Campo obrigatório'),
  lastName: yup.string().min(3, 'Sobrenome inválido').required('Campo obrigatório'),
}).required();

export const StepPersonal = () => {
  const { updateFormData, nextStep, formData } = useRegistration();
  
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      cpf: formData.cpf || '',
      name: formData.name || '',
      lastName: formData.lastName || ''
    }
  });

  const onSubmit = (data: any) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <FormBody>
            <div>
                <Label>Primeiro nome</Label>
                <Input 
                    name="name" 
                    placeholder="p. ex. Leonardo" 
                    control={control} 
                    mask={nameMask}
                />
                {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
            </div>

            <div>
                <Label>Sobrenome</Label>
                <Input 
                    name="lastName" 
                    placeholder="p. ex. Silva" 
                    control={control} 
                    mask={nameMask}
                />
                {errors.lastName && <ErrorText>{errors.lastName.message}</ErrorText>}
            </div>

            <div>
                <Label>CPF</Label>
                <Input 
                    name="cpf" 
                    placeholder="000.000.000-00" 
                    control={control} 
                    mask={cpfMask}
                />
                {errors.cpf && <ErrorText>{errors.cpf.message}</ErrorText>}
            </div>
        </FormBody>

        <ButtonsContainer style={{ justifyContent: 'flex-end' }}>
            {/* Primeiro passo só tem botão de próximo */}
            <NextButton type="submit">Próximo</NextButton>
        </ButtonsContainer>
    </form>
  );
};