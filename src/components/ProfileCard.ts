import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const ProfileCard = styled(LinearGradient).attrs({
  colors: ["#5022c3", "#282828"],
  start: { x: 1, y: 1 },
  end: { x: 1, y: 0 },
})`
  position: relative;
  bottom: 0%;
  overflow: hidden;
  flex: 1;
  border-radius: 5px;
  height: 250px;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 20px;
  padding-left: 20px;
  justify-content: space-around;
  boxsize: border-box;
`;

export const avatarIcon = styled.Image`
  position: relative;
  top: 10%;
  right: 1%;
  width: 100px;
  height: 150px;
  border-radius: 50px;
`;
export const CardTitle = styled.Text`
  position: relative;
  bottom: 50%;
  left:30%;
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Roboto";
  color: white;
  width: 200px;
`;

export const CardSubtitle = styled.Text`
  position: relative;
  bottom: 45px;
  margin-top: 5px;
  left: 5px;
  font-size: 18px;
  font-weight: bold;
  font-family: "Roboto";
  color: white;
`;
