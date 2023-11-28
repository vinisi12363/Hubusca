import React, { useEffect } from "react";
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
import { User } from "../../api/User";
import { TouchableOpacity } from "react-native";
import * as userCard from "../../components/UserCard";
import { useUserContext } from "../../Contexts/UserContext";
import { getUser } from "../../api/User";
import { StackNavigationProp } from "@react-navigation/stack";
import * as Storage from "../../api/Storage";
import { Modal, View, Alert } from "react-native";
import { useState } from "react";
import * as ModalMenu from "../../components/PopMenu";
import { TouchableArea } from "../Profile/styles";

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
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [usersStored, setUsersStored] = useState<User[]>([]);
  
  useEffect(() => {
    loadStorage();
  }, []);

  async function loadStorage() {
    const result = await Storage.carregarUsuarios();
    if (result?.length > 0) {
      setUsersStored(result);
    }
  }
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
        // const userAlreadyStored:boolean = await Storage.verificarEExcluirUser(gitUser.login)

        Storage.adicionarUsuario({
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
    setIsVisible(false);
  };
  const callProfileStored = (data: User) => {
    fetchUser({
      name: data.name,
      login: data.login,
      avatar_url: data.avatar_url,
      location: data.location,
      id: data.id,
      followers: data.followers,
      public_repos: data.public_repos,
    });

    navigation.navigate("Profile");
    setIsVisible(false);
  };
  return (
    <Container>
      <ModalMenu.MaterialMenuArea
        onPress={() => {
          setIsVisible(true);
        }}
      >
        <MaterialCommunityIcons name="menu" size={45} color="white" />
      </ModalMenu.MaterialMenuArea>
      <Modal visible={isVisible} transparent animationType="fade">
        <ModalMenu.ModalContainer
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ModalMenu.CardHeaderMenu>
            Histórico de pesquisa:
          </ModalMenu.CardHeaderMenu>
          <ModalMenu.MaterialMenuAreaX
            onPress={() => {
              setIsVisible(false);
            }}
          >
            <MaterialCommunityIcons name="close" size={45} color="black" />
          </ModalMenu.MaterialMenuAreaX>
          <ModalMenu.ScrollViewMenu>
            {usersStored ? (
              usersStored.map((user: User) => (
                <ModalMenu.UserCardModalMenu>
                  <TouchableOpacity onPress={()=>{callProfile()}}>
                  <ModalMenu.avatarMenuIcon
                    source={{ uri: user.avatar_url }}
                  ></ModalMenu.avatarMenuIcon>
                  </TouchableOpacity>
                  
                  <View>
                    <ModalMenu.CardSubtitleMenu
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      Nome: {user.name}
                    </ModalMenu.CardSubtitleMenu>
                    <ModalMenu.CardSubtitleMenu
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      login: {user.login}
                    </ModalMenu.CardSubtitleMenu>
                    <ModalMenu.CardSubtitleMenu
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      Localização: {user.location}
                    </ModalMenu.CardSubtitleMenu>

                    <ProfileButton
                      onPress={() => {
                        callProfileStored(user);
                      }}
                    >
                      <MaterialCommunityIcons
                        name="chevron-right"
                        size={35}
                        color="#000"
                      />
                    </ProfileButton>
                  </View>
                </ModalMenu.UserCardModalMenu>
              ))
            ) : (
              <></>
            )}
          </ModalMenu.ScrollViewMenu>
        </ModalMenu.ModalContainer>
      </Modal>
      <AppImage source={require("../../../assets/hubusca.png")}></AppImage>
      <SearchContainer>
        <TextArea
          value={username}
          placeholder="Digite o username do usuário"
          autoComplete="off"
          autoFocus={true}
          onChangeText={(text) => setUsername(text)}
          autoCorrect={false}
        ></TextArea>

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
          <TouchableOpacity onPress={()=>{callProfile()}}>
            <userCard.avatarIcon source={{ uri: user.avatar_url }} />
          </TouchableOpacity>
        
          <View>
            <userCard.CardTitle numberOfLines={1} ellipsizeMode="tail">
              Nome: {user.name}
            </userCard.CardTitle>
            <userCard.CardSubtitle numberOfLines={1} ellipsizeMode="tail">
              login: {user.login}
            </userCard.CardSubtitle>
            <userCard.CardSubtitle numberOfLines={1} ellipsizeMode="tail">
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
