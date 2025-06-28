import axios from 'axios';

const promptApi = axios.create({
  baseURL: '/api/prompt',
});

export const sendPrompt = (promptRequest) => promptApi.post('/prompt', promptRequest);

export default promptApi;
