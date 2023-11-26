// Exemplo de arquivo AppContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Repo } from '../api/Repositories';



// Definir o tipo do contexto
interface RepoContextType {
  Repo: Repo | null;
  fetchRepo: (RepoData: Repo) => void;
}

// Criar o contexto
const RepoContext = createContext<RepoContextType | undefined>(undefined);

// Criar um componente de provedor para envolver a parte do seu aplicativo que precisa do contexto
interface RepoProviderProps {
  children: ReactNode;
}

const RepoProvider: React.FC<RepoProviderProps> = ({ children }) => {
  const [Repo, setRepo] = useState<Repo | null>(null);

  const fetchRepo = (RepoData: Repo) => {
    setRepo(RepoData);
  };

  return (
    <RepoContext.Provider value={{ Repo, fetchRepo, }}>
      {children}
    </RepoContext.Provider>
  );
};

// Criar um hook personalizado para consumir o contexto
const useRepoContext = (): RepoContextType => {
  const context = useContext(RepoContext);

  if (!context) {
    throw new Error('useRepoContext must be used within an AppProvider');
  }

  return context;
};

export { RepoProvider, useRepoContext };
