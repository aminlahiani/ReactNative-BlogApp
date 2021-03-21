import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ShowSreen from "./src/screens/ShowSreen";
import IndexScreen from "./src/screens/IndexScreen";
import EditScreen from "./src/screens/EditScreen";
import { Provider } from "./src/context/BlogContext";
import CreateScreen from "./src/screens/CreateScreen";
import { TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={IndexScreen}
          options={({ navigation, route }) => ({
            title: "My home",
            headerStyle: {
              backgroundColor: "#a2a6ab",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                <Feather name="plus" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Show"
          component={ShowSreen}
          options={({ navigation, route }) => ({
            title: "Show",
            headerStyle: {
              backgroundColor: "#a2a6ab",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: route.params.id })}>
                <EvilIcons name="pencil" size={35} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
