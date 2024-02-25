import { postRequestLogin } from ".";

export const loginRequest = (params) =>
  postRequestLogin("/users/login/", params);

export const signupRequest = (params) =>
  postRequestLogin("/users/signup/", params);
