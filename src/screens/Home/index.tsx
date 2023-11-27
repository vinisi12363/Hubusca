import React from "react";
import {
  Container,
  AppImage,
  AppButton,
  ProfileButton,
  TextArea,
  SearchContainer,
  Subtitle,
} from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Alert, View } from "react-native";
import { User } from "../../api/User";
import * as userCard from "../../components/UserCard";
import { useUserContext } from "../../Contexts/UserContext";
import { getUser } from "../../api/User";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";

type StackParam = {
  Home: undefined;
  Profile: undefined;
};

type HomeNaviagtionProp = StackNavigationProp<StackParam, "Home">;

type Props = {
  navigation: HomeNaviagtionProp;
};

export const Home = ({ navigation }: Props) => {
  const { user, fetchUser } = useUserContext();
  const [username, setUsername] = React.useState<string>("");
  
  const searchUser = async () => {
    if (username) {
      try {
        const gitUser: User = await getUser(username);
        fetchUser({
          name: gitUser.name,
          login: gitUser.login,
          avatar_url: gitUser.avatar_url,
          location: gitUser.location,
          id: gitUser.id,
          followers: gitUser.followers,
          public_repos: gitUser.public_repos,
        });
      } catch (error) {
        Alert.alert(
          "usuário não encontrado",
          "verifique o nome do usuário e tente novamente"
        );
      }
    } else {
      Alert.alert(
        "Erro: Campo vazio",
        "Digite o nome de usuário e tente novamente"
      );
    }
  };
  const callProfile = () => {
    navigation.navigate("Profile");
  };
  return (
    <Container>
      <AppImage source={require("../../../assets/hubusca.png")}></AppImage>
      <SearchContainer>
        <TextArea
          value={username}
          placeholder="Digite o username do usuário"
          autoComplete="off"
          autoFocus={true}
          onChangeText={(text) => setUsername(text)}
          autoCorrect={false}
        >

        </TextArea>

       
        <AppButton
          onPress={() => {
            searchUser();
          }}
        >
          <Subtitle>Buscar</Subtitle>
        </AppButton>
      </SearchContainer>

      {user ? (
        <userCard.UserCard>
          <userCard.avatarIcon
            source={{ uri: user.avatar_url }}
          ></userCard.avatarIcon>
          <View>
            <userCard.CardTitle ellipsizeMode="tail">
              Nome: {user.name}
            </userCard.CardTitle>
            <userCard.CardSubtitle ellipsizeMode="tail">
              login: {user.login}
            </userCard.CardSubtitle>
            <userCard.CardSubtitle ellipsizeMode="tail">
              Localização: {user.location}
            </userCard.CardSubtitle>

            <ProfileButton
              onPress={() => {
                callProfile();
              }}
            >
              <MaterialCommunityIcons
                name="chevron-right"
                size={35}
                color="#000"
              />
            </ProfileButton>
          </View>
        </userCard.UserCard>
      ) : (
        <></>
      )}
    </Container>
  );
};
