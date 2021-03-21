import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ShowSreen from "./src/screens/ShowSreen";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import CreateScreen from "./src/screens/CreateScreen";


const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={IndexScreen}
          options={{ title: "Blog" }}
        />
        <Stack.Screen name="Show" component={ShowSreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
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
