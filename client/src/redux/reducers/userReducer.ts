const emptyState = {
    forms: [],
    _id: "",
    name: "",
    password: "",
    pfpUrl: "",
    userId: "",
    email: "",
};

const testReducer = (state = emptyState, action:any) => {
    switch (action.type) {
      case "SET_USER_DATA":
        const { forms, userId, email, pfpUrl, password, name } = action.payload;
        console.log(action.payload)
        return { forms, userId, email, pfpUrl, password, name };
      case "CLEAR_USER_DATA":
        return emptyState;
      default:
        return state;
    }
};
  
export default testReducer;