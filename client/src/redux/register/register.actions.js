import axios from "axios";
import {
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./register.types";

export const registerUser = (creds) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    // Stubbed backend call for frontend-only build
    const mockData = { message: "User registered successfully", email: creds.email };
    dispatch({ type: REGISTER_SUCCESS, payload: mockData });
    return mockData;
  } catch (error) {
    dispatch({ type: REGISTER_ERROR, payload: error.message });
  }
};
