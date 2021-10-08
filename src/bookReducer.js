const initState = {
  books: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case "ADD_BOOK": {
      return {
        ...state,
        books: state.books.concat(action.book)
      };
    }
    default: {
      return state;
    }
  }
};
