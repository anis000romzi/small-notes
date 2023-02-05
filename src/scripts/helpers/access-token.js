const getAccessToken = () => localStorage.getItem('accessToken');

const putAccessToken = (accessToken) => localStorage.setItem('accessToken', accessToken);

const fetchWithToken = async (url, options = {}) => fetch(url, {
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${getAccessToken()}`,
  },
});

export { getAccessToken, putAccessToken, fetchWithToken };
