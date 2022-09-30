import { apis } from "service";

const COMMON_URL = `https://nodedemo.dhiwise.co/device/`;

const API_URLS = {
  POST_LOGIN: `${COMMON_URL}auth/login`,
  PUT_UPDATEPROFILE: `${COMMON_URL}api/v1/user/update-profile`,
};

export const postLogin = (payload) => apis.post(API_URLS.POST_LOGIN, payload);

export const putUpdateprofile = (payload) =>
  apis.put(API_URLS.PUT_UPDATEPROFILE, {
    ...payload,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjUyZjdjMTI0ODc2MDAxNTVjYzY0ZCIsImVtYWlsIjoiUHJpc2NpbGxhX01vaHJAeWFob28uY29tIiwiaWF0IjoxNjM0MDIyNDM4LCJleHAiOjE2MzQ2MjI0Mzh9.YYcCfVOnPA7ZFc-cV90a33_Hycddj-Xtt5kI6IRukxQ",
      ...payload?.headers,
    },
  });
