import { AUTH } from "../../constants";

export default (state = false, action) => {
  switch (action.type) {
    case AUTH.type:
      return !state;
    default:
      return state;
  }
};
