export const UserReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((val) => val.id !== action.payload);
    default:
      return state;
  }
};
