import * as ProfileCard from "../../components/ProfileCard";
import { useUserContext } from "../../Contexts/UserContext";
import { Container } from "../Home/styles";
import { View } from "react-native";
import {useEffect} from 'react';

export default function Profile() {

  const { user } = useUserContext();
  useEffect(() => {

  }, [user]);
  
  return (
    <Container>
      <ProfileCard.ProfileCard>
        <ProfileCard.avatarIcon
          source={{ uri: user?.avatar_url }}
        ></ProfileCard.avatarIcon>
        <View>
          <ProfileCard.CardTitle  numberOfLines={1} ellipsizeMode="tail">
            Nome: {user?.name}
          </ProfileCard.CardTitle>
          <ProfileCard.CardTitle ellipsizeMode="tail">
            Seguidores 👦 :  {user?.followers}
          </ProfileCard.CardTitle>
          <ProfileCard.CardTitle ellipsizeMode="tail">
            Repositórios 📂 :  {user?.public_repos}
          </ProfileCard.CardTitle>
          <ProfileCard.CardSubtitle ellipsizeMode="tail">
            Login 💻:   {user?.login}
          </ProfileCard.CardSubtitle>

          <ProfileCard.CardSubtitle numberOfLines={1} ellipsizeMode="tail">
            Localização 🏠 :  {user?.location}
          </ProfileCard.CardSubtitle>

          <ProfileCard.CardSubtitle ellipsizeMode="tail">
            ID :  {user?.id}
          </ProfileCard.CardSubtitle>

         
          
        </View>
      </ProfileCard.ProfileCard>
      
      <View>
        <ProfileCard.CardTitle>Repositórios</ProfileCard.CardTitle>
      </View>

    </Container>
  );
}
