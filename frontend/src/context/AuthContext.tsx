import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { api } from '../services/api'; 

//  Tipagem dos dados do Usuário (Sincronizado com o que você usou na TelaPerfil)
export type AuthUser = {
  id_user: number;
  name: string;
  lastname: string;
  email: string;
  cpf?: string | null;
  imagemUrl?: string | null;
  bio?: string | null;
};

//  Tipagem das credenciais de Login
type SignInCredentials = {
  email: string;
  password: string;
};

//  Tipagem do que o Contexto exporta
type AuthContextData = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  updateUser: (user: AuthUser) => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

// Criação do Contexto
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  
  // Inicialização do Estado (Lazy Initialization)
  // Já verifica o localStorage ao iniciar a aplicação para evitar "piscar" a tela de login
  const [user, setUser] = useState<AuthUser | null>(() => {
    const storedUser = localStorage.getItem('kodan_user');
    const storedToken = localStorage.getItem('kodan_token');

    if (storedToken && storedUser) {
      // Se tiver token, já anexa no cabeçalho da API
      api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      try {
        return JSON.parse(storedUser);
      } catch (error) {
        return null;
      }
    }
    return null;
  });

  // 5. Função de Login
  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post('/auth/login', { email, password }); 

      const { token, user } = response.data;

      // Salva no LocalStorage
      localStorage.setItem('kodan_token', token);
      localStorage.setItem('kodan_user', JSON.stringify(user));

      // Configura o Token na API
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Atualiza o estado
      setUser(user);

    } catch (error) {
      console.error("Erro ao fazer login", error);
      throw error; // Lança o erro para o componente tratar (ex: mostrar toast)
    }
  };

  // 6. Função de Logout
  const signOut = () => {
    localStorage.removeItem('kodan_token');
    localStorage.removeItem('kodan_user');
    
    // Remove o token dos headers da API
    delete api.defaults.headers.common['Authorization'];
    
    setUser(null);
  };

  // Função para Atualizar dados do usuário SEM deslogar
  // É essa função que a TelaPerfil vai chamar
  const updateUser = (updatedUser: AuthUser) => {
    setUser(updatedUser); // Atualiza o Estado (React re-renderiza o Header)
    localStorage.setItem('kodan_user', JSON.stringify(updatedUser)); // Persiste no Storage
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user, 
        signIn, 
        signOut, 
        updateUser 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para facilitar o uso
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }

  return context;
}