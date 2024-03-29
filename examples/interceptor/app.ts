import axios from '../../src';

axios.interceptors.request.use(config => {
  config.headers.test += '1';
  return config;
});

axios.interceptors.request.use(config => {
  config.headers.test += '2';
  return config;
});

axios.interceptors.request.use(config => {
  config.headers.test += '3';
  return config;
});

axios.interceptors.response.use(res => {
  res.data += 'a';
  return res;
});

let interceptor = axios.interceptors.response.use(res => {
  res.data += 'b';
  return res;
});

console.log('interceptor: ', interceptor);

axios.interceptors.response.use(res => {
  res.data += 'c';
  return res;
});

axios.interceptors.response.eject(interceptor);

axios({
  url: '/interceptor/get',
  method: 'get',
  headers: {
    test: ''
  }
}).then((res) => {
  console.log(res.data);
});
