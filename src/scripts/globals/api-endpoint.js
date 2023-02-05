import CONFIG from './config';

const API_ENDPOINT = {
  LOGIN: `${CONFIG.BASE_URL}login`, // method: POST
  REGISTER: `${CONFIG.BASE_URL}register`, // method: POST
  GET_USER_LOGGED: `${CONFIG.BASE_URL}users/me`, // method: GET
  ADD_NOTE: `${CONFIG.BASE_URL}notes`, // method: POST
  GET_ACTIVE_NOTES: `${CONFIG.BASE_URL}notes`, // method: GET
  GET_ARCHIVED_NOTES: `${CONFIG.BASE_URL}notes/archived`, // method: GET
  GET_SINGLE_NOTE: (id) => `${CONFIG.BASE_URL}notes/${id}`, // method: GET
  ARCHIVE_NOTE: (id) => `${CONFIG.BASE_URL}notes/${id}/archive`, // method: POST
  ACTIVATE_NOTE: (id) => `${CONFIG.BASE_URL}notes/${id}/unarchive`, // method: POST
  DELETE_NOTE: (id) => `${CONFIG.BASE_URL}notes/${id}`, // method: DELETE
};

export default API_ENDPOINT;
