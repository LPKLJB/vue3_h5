import axios from 'axios'
import { getToken } from '../../utils/auth'
import { Notify } from 'vant'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 100000
})

service.interceptors.request.use(config => {
  const token = getToken()
  if (token) { // 携带token
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const { code, message } = response.data
  if (code !== 0) { // 错误提示
    Notify({
		type: 'danger',
		message: message
	})
    return Promise.reject(message)
  }
  return response.data
}, error => {
  console.log('err' + error) // for debug
  return Promise.reject(error)
})

const $axios = (option) => {
    let parDef = {
        url: "",
        data: {},
        method: "post",
    };

    let par = Object.assign(parDef, option);
    return new Promise((resolve, reject) => {
        instance({
                url: par.url,
                params: par.data,
                method: par.method,
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
export default $axios;
