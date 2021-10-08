const initState = {
  theme: "tomato"
};

export default (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_THEME": {
      return { theme: action.theme };
    }
    default: {
      return state;
    }
  }
};
