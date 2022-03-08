import $axios from "@/axios/request";
/**
 *
 * @param {*} url --api路径
 * @param {*} data -- 请求参数 json对象
 * @param {*} method --请求方式：get/post/formdata
 */
export const getData = (url = "", data = {}, method = "post") => $axios({
  url,
  method,
  data
});
