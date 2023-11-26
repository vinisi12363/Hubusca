import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

export const UserCard = styled(LinearGradient).attrs({
  colors: ['#7746AC', '#E04FB3'],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
})`
  flex: 1;
  border-radius: 5px;
  max-height: 200px;
  width: 90%;
  
  margin-top: 20px; 
  
  justify-content: space-around;
`;


export const avatarIcon = styled.Image`
    margin-top: 10px;
    width: 130px;
    height: 150px;
    margin-bottom: 20px;
    border-radius:50px;
    margin-left: 10px;
`
export const CardTitle = styled.Text`
  
    font-size: 20px;
    font-family: 'Roboto';
    color: black;
  
`

export const CardSubtitle = styled.Text`

    font-size: 20px;
    font-family: 'Roboto';
    color: black;
  
`