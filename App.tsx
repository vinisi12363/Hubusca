import { Home } from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import { AppProvider } from "./src/Contexts/UserContext";
import { RepoProvider } from "./src/Contexts/RepoContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <RepoProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{ headerShown: true }}
            component={Home}
          ></Stack.Screen>
          <Stack.Screen
            name="Profile"
            component={Profile}
          
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      </RepoProvider>
    </AppProvider>
  );
}
