import React from 'react';
import {Container , AppImage, AppButton, TextArea, SearchContainer} from './styles';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {Image } from 'react-native';

export default function Home() {
    const [count, setCount] = React.useState(0);
    return (
        <Container>
            <AppImage  source={require("../../../assets/hubusca.png")}></AppImage>    
            <SearchContainer>
            
                <TextArea placeholder="Digite o nome do repositório"></TextArea>
                <AppButton  onPress={()=>{setCount(count+1)}}>
                <MaterialCommunityIcons name='magnify' size={35} color='#000' />
                </AppButton>
                <TextArea> Você clicou {count}</TextArea>
            </SearchContainer>          
        </Container>
    )
}