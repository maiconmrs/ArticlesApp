import axios from "axios";
import { apiUrl } from "../../config/constants";

export const articlesFetched = (articles) => ({
  type: "ARTICLES_FETCHED",
  payload: articles,
});

export function fetchArticles(keyword) {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get(`${apiUrl}${keyword}`);

      const articles = response.data.articles;

      console.log(articles);

      dispatch(articlesFetched(articles));
    } catch (e) {
      console.log(e);
    }
  };
}
