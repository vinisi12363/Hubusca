import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const ProfileCard = styled(LinearGradient).attrs({
  colors: ["#5022c3", "#282828"],
  start: { x: 1, y: 1 },
  end: { x: 1, y: 0 },
})`
  position: relative;
  bottom: 250px;
  overflow: hidden;
  flex: 1;
  border-radius: 5px;
  max-height: 200px;
  width: 90%;
  min-height: 350px;
  padding-top: 15px;
  padding-bottom: 20px;
  padding-left: 20px;
  justify-content: space-around;
`;

export const avatarIcon = styled.Image`
  position: relative;
  top: 30px;
  right: 5px;
  width: 100px;
  height: 150px;
  border: 2px solid white;
  border-radius: 50px;
`;
export const CardTitle = styled.Text`
  position: relative;
  bottom: 100px;
  left: 110px;
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
