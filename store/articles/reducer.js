const initialState = {
  articles: [],
  savedArticles: [],
};

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case "ARTICLES_FETCHED": {
      return { ...state, articles: action.payload };
    }
    case "SAVE_ARTICLE":
      return {
        ...state,
        savedArticles: [...state.savedArticles, action.payload],
      };

    case "DELETE_ALL_ARTICLES":
      return {
        ...state,
        savedArticles: [],
      };

    default: {
      return state;
    }
  }
}
