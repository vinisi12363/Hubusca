
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #0F172A;
  align-items: center;
  justify-content: center;
  
  `;
export const SearchContainer = styled.View`
    background-color: #DEEFF7;
    width: 90%;
    border-radius: 5px;
    padding: 10px 20px 20px 20px;
    
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 30px;


`
export const Title = styled.Text`
    font-size: 20px;
    font-family: 'Roboto';
    color: blue;
    
`
export const Subtitle = styled.Text`
    font-size: 25px;
    font-family: 'Roboto';
    color: darkgray;

`    
export const AppImage = styled.Image`
    width: 150px;
    height: 150px;

    margin-bottom: 20px;
    border-radius: 15px;
    position: absolute;
    top: 60px;
    
`
export const AppButton = styled.TouchableOpacity`
background-color: lightblue;
width: 120px;
height: 50px;
padding: 10px 20px;
border-radius: 5px;
margin-top: 20px;
align-items: center;
justify-content: center;

`

export const TextArea = styled.TextInput`
background-color: #fff;
width: 90%;

border-radius: 5px;
padding: 10px;
font-size: 20px;
margin-top: 20px;

`


