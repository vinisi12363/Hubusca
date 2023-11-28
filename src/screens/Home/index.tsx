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
import * as userCard from "../../components/UserCard";
import { useUserContext } from "../../Contexts/UserContext";
import { getUser } from "../../api/User";
import { StackNavigationProp } from "@react-navigation/stack";
import * as Storage from "../../api/Storage";
import { Modal, View , Alert,Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import {
         ModalContainer,
         MaterialMenuArea,
         MaterialMenuAreaX
} from '../../components/PopMenu'



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
  const [isVisible , setIsVisible] = useState<boolean>(false);
  const [usersStored , setUsersStored] = useState<User []>([]);
  useEffect(()=>{
    loadStorage();
    
   },[]);  

  async function loadStorage(){
      
      const result = await Storage.carregarUsuarios();
      if (result?.length > 0){
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
        const userAlreadyStored:boolean = await Storage.verificarEExcluirUser(gitUser.login)
        if(!userAlreadyStored){
          Storage.adicionarUsuario({ 
            name: gitUser.name,
            login: gitUser.login,
            avatar_url: gitUser.avatar_url,
            location: gitUser.location,
            id: gitUser.id,
            followers: gitUser.followers,
            public_repos: gitUser.public_repos,
          })
        }
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
    setIsVisible(true);
    navigation.navigate("Profile");
  };
  const  callProfileStored = (username: string) =>{
    setUsername (username);
    setIsVisible(true);
    searchUser();
    navigation.navigate("Profile");
    
  }
  return (
    <Container>
        <MaterialMenuArea onPress={()=>{setIsVisible(true)}}>
        <MaterialCommunityIcons
                name="menu"
                size={45}
                color="white"
              />
        </MaterialMenuArea>
        <Modal visible={isVisible} transparent animationType="slide">
        
        <ModalContainer style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MaterialMenuAreaX onPress={()=>{setIsVisible(false)}}>
        <MaterialCommunityIcons
                name="close"
                size={45}
                color="black"
              />
        </MaterialMenuAreaX>
          {usersStored?  (
              usersStored.map((user: User) => (
                <userCard.UserCard key={user.login}>
                  <userCard.avatarIcon
                    source={{ uri: user.avatar_url }}
                  ></userCard.avatarIcon>
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
                        callProfileStored(user.login) ;
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
              ))
            ) : <></>
          }
          

        </ModalContainer>
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
            <userCard.CardTitle numberOfLines={1} ellipsizeMode="tail">
              Nome: {user.name}
            </userCard.CardTitle>
            <userCard.CardSubtitle numberOfLines={1}  ellipsizeMode="tail">
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
