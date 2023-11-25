import { Container , Title , IconButtonsRow , IconButton  } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
    return (
      <Container>
        <Title>titulo</Title>
        <IconButtonsRow>
          <IconButton activeOpacity={0.7} onPress={() => true}>
            <MaterialCommunityIcons name='magnify' size={28} color='#010101' />
          </IconButton>
          <IconButton activeOpacity={0.7} onPress={() => true}>
            <MaterialCommunityIcons
              name='facebook-messenger'
              size={28}
              color='#010101'
            />
          </IconButton>
        </IconButtonsRow>
      </Container>
    );
  };
  export default Header;