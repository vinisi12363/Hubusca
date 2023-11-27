import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const UserCard = styled(LinearGradient).attrs({
  colors: ["#7746AC", "#E04FB3"],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
})`
  overflow: hidden;
  flex: 1;
  border-radius: 5px;
  max-height: 200px;
  width: 90%;
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
