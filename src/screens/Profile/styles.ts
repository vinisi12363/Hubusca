import styled from "styled-components/native";


export const RepoView = styled.View`
  flex: 1;
  background-color: #282828;
  min-height: 200px;
  padding-top: 45px;
  margin-bottom: 10px;
`;
export const IconView = styled.View`
  flex: 1;
  background-color: transparent;
  width: 80px;
  justify-content: start;
  position: absolute;
  bottom:20px;
  left:300px;
  
  align-items: start;
  z-index: 1;
  max-height: 150px;
  padding-top: 45px;
  margin-bottom: 10px;
  border-radius: 5px;

`
export const TouchableArea = styled.TouchableOpacity`
    flex: 1;
    background-color: #red;
    min-height: 200px;
    padding-top: 45px;
    margin-bottom: 10px;

`;
export const ProfileContainer = styled.View`
  flex: 1;
  boxsize: border-box;
  position: relative;
  bottom: 0px;
  border-radius: 5px;
  border: 2px solid white;
  overflow: hidden;
  margin-bottom: 10px;
  width: 100%;
  background-color: gray;
  align-items: center;
  justify-content: center;
`;

export const ViewContainer = styled.View`
  flex: 1;
  boxsize: border-box;
  overflow: hidden;
  margin-bottom: 8px;
  width: 100%;
  max-height: 65px;
  background-color: #282828;
  align-items: center;
  justify-content: space-between;
`;
export const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size:40px;
  font-family: "Roboto";
  font-weight: bold;
  color: white;
`;
export const RepoContainer = styled.View`
  flex: 1;
  boxsize: border-box;
  overflow: hidden;
  margin-bottom: 8px;
  width: 100%;
  background-color: black;
  align-items: center;
  justify-content: space-between;
`;
export const ScrollView = styled.ScrollView`
  background-color: red;
  height: 100px;
  width: 100px;
`;
export const SearchContainer = styled.View`
  background-color: #deeff7;
  width: 90%;
  border-radius: 5px;
  padding: 10px 20px 20px 20px;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 30px;
`;

export const Subtitle = styled.Text`
  font-size: 25px;
  font-family: "Roboto";
  font-weight: bold;
  color: black;
`;
export const AppImage = styled.Image`
  width: 130px;
  height: 130px;
  margin-bottom: 20px;
  border-radius: 15px;
  position: relative;
  bottom: 60px;
`;
export const AppButton = styled.TouchableOpacity`
  background-color: lightblue;
  width: 120px;
  height: 50px;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  
  `;
export const ProfileButton = styled.TouchableOpacity`
  background-color: lightgrey;
  width: 120px;
  height: 50px;
  position: relative;
  left: 150px;
  bottom: 50px;
  padding: 10px 20px;
  border-radius: 50px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const TextArea = styled.TextInput`
  background-color: #fff;
  width: 90%;
  border-radius: 30px;
  padding: 10px;
  font-size: 15px;
  font-family: "Roboto";
  margin-top: 10px;
`;
