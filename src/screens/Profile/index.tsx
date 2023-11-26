import * as userCard from '../../components/UserCard'
import { useUserContext } from '../../Contexts/UserContext';
import { Container } from '../Home/styles';
import { View } from 'react-native';

export default function Profile() {

    const { user } = useUserContext();
    return (
        <Container>
            <userCard.UserCard>
                <userCard.avatarIcon source={{uri: user?.avatar_url}}></userCard.avatarIcon>
                <View>
                    <userCard.CardTitle  ellipsizeMode='tail'>Nome: {user?.name}</userCard.CardTitle>
                    <userCard.CardSubtitle ellipsizeMode='tail'>login: {user?.login}</userCard.CardSubtitle>
                    <userCard.CardSubtitle ellipsizeMode='tail'>Localização: {user?.location}</userCard.CardSubtitle>
                
                </View>
            </userCard.UserCard>
        </Container>
    );


}