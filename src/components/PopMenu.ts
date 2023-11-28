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
  justify-content: space-around;
`;

export const avatarIcon = styled.Image`
  position: relative;
  top: 15px;
  width: 100px;
  height: 180px;
  border-radius: 30px;
  border: 2px solid white;
`;

export const MaterialMenuArea = styled.TouchableOpacity`
  width:50px;
  background:transparent;
  position: absolute;
  right:330px;
  bottom: 640px;
  z-index:1;

`
export const MaterialMenuAreaX = styled.TouchableOpacity`
  width:50px;
  background:transparent;
  position: relative;
  left:150px;
  bottom:330px;

`
export const CardTitle = styled.Text`
  position: relative;
  bottom: 50px;
  left: 110px;
  font-size: 18px;
  font-weight: bold;
  font-family: "Roboto";
  color: white;
`;

export const CardSubtitle = styled.Text`
  overflow: hidden;
  position: relative;
  bottom: 40px;
  left: 110px;
  font-size: 18px;
  font-weight: bold;
  font-family: "Roboto";
  color: white;
`;
