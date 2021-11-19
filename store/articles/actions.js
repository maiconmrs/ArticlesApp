import axios from "axios";
import { apiUrl } from "../../config/constants";

export const articlesFetched = (articles) => ({
  type: "ARTICLES_FETCHED",
  payload: articles,
});

// export function fetchArticles(keyword) {  <--- keyword provided by searchbar

export function fetchArticles() {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get(apiUrl);

      const articles = response.data;

      dispatch(articlesFetched(articles));
    } catch (e) {
      console.log(e);
    }
    console.log(articles);
  };
}
