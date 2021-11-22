import axios from "axios";
import { apiUrl } from "../../config/constants";

export const articlesFetched = (articles) => ({
  type: "ARTICLES_FETCHED",
  payload: articles,
});

export const saveArticle = (article) => (dispatch) => {
  dispatch({
    type: "SAVE_ARTICLE",
    payload: article,
  });
};

export function fetchArticles(keyWord) {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get(`${apiUrl}${keyWord}`);

      const articles = response.data.articles;

      console.log(articles);

      dispatch(articlesFetched(articles));
    } catch (e) {
      console.log(e);
    }
  };
}
