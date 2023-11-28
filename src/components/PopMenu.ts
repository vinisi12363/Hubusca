import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const ModalContainer = styled(LinearGradient).attrs({
  colors: ["#000000", "#ffffff"],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
})`
  overflow: hidden;
  flex: 1;
  border-radius: 5px;
  min-height: 200px;
  width: 100%;
  padding-top: 45px;
  padding-bottom: 20px;
  padding-left: 20px;
  margin-bottom:15px;
  align-itens:space-around;
  justify-content: space-around;
`;
export const ScrollViewMenu = styled.ScrollView`
  background-color: transparent;
  height: 100%;
  width: 100%;
`;
export const UserCardModalMenu = styled(LinearGradient).attrs({
  colors: ["#7746AC", "#E04FB3"],
  start: { x: 0, y: 1 },
  end: { x:1, y: 0 },
})`
  overflow: hidden;
  flex: 1;
  border-radius: 5px;
  max-height: 200px;
  width: 90%;
  padding-top: 45px;
  padding-bottom: 20px;
  padding-left: 20px;
  margin-bottom:30px;
  justify-content: space-around;
`;

export const avatarMenuIcon = styled.Image`
  position: relative;
  top: 15px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
 
`;
export const CardTitleMenu = styled.Text`
  position: relative;
  bottom: 50px;
  left: 110px;
  font-size: 18px;
  font-weight: bold;
  font-family: "Roboto";
  color: black;
  
`;

export const MaterialMenuArea = styled.TouchableOpacity`
  width:50px;
  background:transparent;
  position: absolute;
  right:85%;
  bottom: 90%;
  z-index:1;

`
export const MaterialMenuAreaX = styled.TouchableOpacity`
  width:50px;
  background:transparent;
  position: absolute;
  left:90%;
  bottom:100%;
  z-index:1;

`

export const CardSubtitleMenu = styled.Text`
  overflow: hidden;
  position: relative;
  bottom: 40px;
  left: 110px;
  font-size: 18px;
  font-weight: bold;
  font-family: "Roboto";
  color: white;
  overflow:hidden;
`;

export const CardHeaderMenu = styled.Text`
  overflow: hidden;
  position: relative;
  bottom: 0px;
  right:5%;
  font-size: 22px;
  font-weight: bold;
  font-family: "Roboto";
  color: black;
  overflow:hidden;
`;
