import React, { useEffect, useState } from 'react';
import { View, ScrollView, Linking, Alert } from 'react-native';
import { format } from 'date-fns';
import { Container,ProfileContainer,ViewContainer, RepoView, TouchableArea , RepoContainer,Title,IconView} from './styles';
import { useUserContext } from '../../Contexts/UserContext';
import { useRepoContext } from '../../Contexts/RepoContext';
import { getRepos, Repo } from '../../api/Repositories';
import * as ProfileCard from '../../components/ProfileCard';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from 'react-native/Libraries/StyleSheet/StyleSheet';
import * as Storage from "../../api/Storage";

export default function Profile() {
  const { user } = useUserContext();
  const { Repo } = useRepoContext();
  const [repos, setRepos] = useState<Repo[]>([]);
  
  useEffect(() => {
   
    loadRepos();
  }, [user]);

  const loadRepos = async () => {
    if (user?.login) {
      try {
        const gitRepo = await getRepos(user.login);
        gitRepo.forEach((element: Repo) => {
          element.created_at = formatarData(element.created_at);
          element.updated_at = formatarData(element.updated_at);
        });
        const result = gitRepo.map((repo: Repo) => ({
          name: repo.name,
          language: repo.language,
          description: repo.description,
          created_at: repo.created_at,
          updated_at: repo.updated_at,
        }));
        setRepos(result);
      } catch (error) {
        console.error('Erro de requisição:', error);
        Alert.alert(
          'Erro de requisição',
          'Houve um erro ao puxar os repositórios'
        );
      }
    }
  };

  const formatarData = (data: string): string => {
    const formData = new Date(data);
    return format(formData, 'dd/MM/yyyy');
  };

  const openWebPage = (repo: string) => {
    const url = `https://www.github.com/${user?.login}/${repo}`;
    Linking.openURL(url);
  };

  return (
    <Container>
      <ProfileCard.ProfileCard>
        <ProfileCard.avatarIcon source={{ uri: user?.avatar_url }} />
        <View>
          <ProfileCard.CardTitle numberOfLines={1} ellipsizeMode="tail">
            Nome: {user?.name}
          </ProfileCard.CardTitle>
          <ProfileCard.CardTitle ellipsizeMode="tail">
            Seguidores 👦 : {user?.followers}
          </ProfileCard.CardTitle>
          <ProfileCard.CardTitle ellipsizeMode="tail">
            Repositórios 📂 : {user?.public_repos}
          </ProfileCard.CardTitle>
          <ProfileCard.CardSubtitle ellipsizeMode="tail">
            Login 💻: {user?.login}
          </ProfileCard.CardSubtitle>
          <ProfileCard.CardSubtitle numberOfLines={1} ellipsizeMode="tail">
            Localização 🏠 : {user?.location}
          </ProfileCard.CardSubtitle>
          <ProfileCard.CardSubtitle ellipsizeMode="tail">
            ID : {user?.id}
          </ProfileCard.CardSubtitle>
        </View>
      </ProfileCard.ProfileCard>
      <ViewContainer>
        <Title>Repositórios</Title>
      </ViewContainer>
      <RepoContainer>
        <ScrollView>
          {repos?.map((repo: Repo) => (
            <>
            
            <TouchableArea  key={repo.name} onPress={() => openWebPage(repo.name)}>
          
              <RepoView >
                <IconView>
                <MaterialCommunityIcons
                        name="folder-pound"
                        size={80}
                        color="#FFFFFF"
                 />
                </IconView>
                <ProfileCard.CardSubtitle>
                  Repositório: {repo.name}
                </ProfileCard.CardSubtitle>
                <ProfileCard.CardSubtitle>
                  Linguagem: {repo.language}
                </ProfileCard.CardSubtitle>
                <ProfileCard.CardSubtitle>
                  Descrição: {repo.description}
                </ProfileCard.CardSubtitle>
                <ProfileCard.CardSubtitle>
                  Criado em: {repo.created_at}
                </ProfileCard.CardSubtitle>
                <ProfileCard.CardSubtitle>
                  Último commit em: {repo.updated_at}
                </ProfileCard.CardSubtitle>
              </RepoView>
            </TouchableArea>
            </>
          ))}
        </ScrollView>
      </RepoContainer>
      </Container>
  );
}
