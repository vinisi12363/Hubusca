import * as ProfileCard from "../../components/ProfileCard";
import { useUserContext } from "../../Contexts/UserContext";
import { useRepoContext } from "../../Contexts/RepoContext";
import { ProfileContainer, RepoView } from "./styles";
import { Container } from "../Home/styles";
import { View, ScrollView, Alert } from "react-native";
import { useEffect, useState } from "react";
import { Repo, getRepos } from "../../api/Repositories";
import { format } from "date-fns";

export default function Profile() {
  const { Repo, fetchRepo } = useRepoContext();
  const [repos, setRepos] = useState<Repo[]>([]);
  const { user } = useUserContext();

  useEffect(() => {
    loadRepos();
  }, [user]);

  const loadRepos = async () => {
    if (user?.login) {
      try {
        const gitRepo = await getRepos(user.login);
        gitRepo.forEach((element:Repo)=>{
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
        console.log("result", result);
        fetchRepo(result);
        setRepos(result);
      } catch (error) {
        Alert.alert(
          "Erro de requisição",
          "Houve um erro ao puxar os repositórios"
        );
      }
    }
  };

  function formatarData(data: string): string {
    const formData = new Date(data);
    return format(formData, "dd/MM/yyyy");
  }

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

      <ProfileContainer>
        <ScrollView>
          {repos?.map((repo: Repo) => (
            <RepoView key={repo.name}>
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
          ))}
        </ScrollView>
      </ProfileContainer>
    </Container>
  );
}
