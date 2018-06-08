import axios from 'axios';

const baseURL = 'https://test-task-server.herokuapp.com/api';

const api = axios.create({
  baseURL,
});

export const actionWrapper = async ({ onSuccess, onError, ...config }) => {
  try {
    const response = await (api(config));
    onSuccess && onSuccess(response);
  } catch (err) {
    (onError && onError()) || console.log('error: ', err);
  }
};

export default api;
