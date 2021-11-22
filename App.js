import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SearchScreen from "./screens/SearchScreen";
import ReadingList from "./screens/ReadingList";

import store from "./store/store";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Search" component={SearchScreen} />
      <Drawer.Screen name="My Reading List" component={ReadingList} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
