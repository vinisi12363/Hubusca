import AsyncStorage from '@react-native-async-storage/async-storage';

// Defina uma chave para armazenar seus dados no AsyncStorage
const STORAGE_KEY = 'usuarios';

// Interface do usuário que você está armazenando
interface Usuario {
  avatar_url: string;
  name: string;
  login: string;
  location: string;
  id: number;
  followers: number;
  public_repos: number;
}

// Função para adicionar um usuário ao AsyncStorage
export const adicionarUsuario = async (usuario: Usuario): Promise<void> => {
  try {
    // Obtém os usuários existentes
    const usuariosExist = await AsyncStorage.getItem(STORAGE_KEY);
    const usuarios: Usuario[] = usuariosExist ? JSON.parse(usuariosExist) : [];

    // Adiciona o novo usuário
    usuarios.push(usuario);

    // Atualiza o AsyncStorage
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
    
    // Notifica que os usuários foram atualizados (pode ser uma função de retorno de chamada ou um evento personalizado)
    notificarUsuariosAtualizados(usuarios);
  } catch (error) {
    console.error('Erro ao adicionar usuário:', error);
  }
};

// Função para obter todos os usuários do AsyncStorage
export const carregarUsuarios = async (): Promise<Usuario[]> => {
  try {
    const usuariosExist = await AsyncStorage.getItem(STORAGE_KEY);
    return usuariosExist ? JSON.parse(usuariosExist) : [];
  } catch (error) {
    console.error('Erro ao carregar usuários:', error);
    return [];
  }
};

export const verificarEExcluirUser = async (username: string): Promise<boolean> => {
  try {
    const usuariosExist = await AsyncStorage.getItem('usuarios');
    
    if (!usuariosExist) {
      return false; // Se a lista não existir, o usuário não existe
    }

    const usuarios: Usuario[] = JSON.parse(usuariosExist);

    // Verifica se o usuário está na lista
    const usuarioIndex = usuarios.findIndex(user => user.login === username);

    if (usuarioIndex !== -1) {
      // Remove o usuário da lista
      usuarios.splice(usuarioIndex, 1);

      // Atualiza a lista no AsyncStorage
      await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));
      return true;
    }

    return false; // Se o usuário não foi encontrado na lista
  } catch (error) {
    console.error('Erro ao verificar e excluir usuário:', error);
    return false;
  }
};


// Sistema simples de notificação manual
let listeners: ((usuarios: Usuario[]) => void)[] = [];

const notificarUsuariosAtualizados = (usuarios: Usuario[]): void => {
  listeners.forEach(listener => listener(usuarios));
};

export const adicionarListenerUsuarios = (listener: (usuarios: Usuario[]) => void): void => {
  listeners.push(listener);
};

export const removerListenerUsuarios = (listener: (usuarios: Usuario[]) => void): void => {
  listeners = listeners.filter(l => l !== listener);
};
