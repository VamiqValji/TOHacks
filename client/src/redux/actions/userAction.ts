export const setUserData = (data: object) => {
    return {
      type: "SET_USER_DATA",
      payload: data,
    };
}; 

export const clearUserData = () => {
    return {
      type: "CLEAR_USER_DATA",
    };
}; 
