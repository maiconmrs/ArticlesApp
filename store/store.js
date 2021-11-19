import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import articlesReducer from "./articles/reducer";

const rootReducer = combineReducers({
  articlesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
