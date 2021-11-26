export const UpdateFlag = (value) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_LOGIN_FLAG", flag: value });
  };
};
