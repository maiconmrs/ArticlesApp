import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import articlesReducer from "./articles/reducer";

const rootReducer = combineReducers({
  articlesReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistingReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistingReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export default { store, persistor };
