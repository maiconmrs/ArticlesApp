const initialState = {
  Articles: [],
};

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case "ARTICLES_FETCHED": {
      return {
        Articles: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
