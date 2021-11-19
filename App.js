import * as React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SearchPage from "./pages/SearchPage";
import ReadingList from "./pages/ReadingList";

import store from "./store/store";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Provider store={store}>
      <Drawer.Navigator>
        <Drawer.Screen name="Search" component={SearchPage} />
        <Drawer.Screen name="Reading List" component={ReadingList} />
      </Drawer.Navigator>
    </Provider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
