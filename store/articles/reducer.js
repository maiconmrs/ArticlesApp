const initialState = {
  articles: [],
};

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case "ARTICLES_FETCHED": {
      return { ...state, articles: action.payload };
    }

    default: {
      return state;
    }
  }
}
