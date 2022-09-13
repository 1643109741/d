import axios from "axios";
axios.interceptors.request.use(function (config) {
  // console.log(config,"请求拦截器req")
  if(sessionStorage.getItem('token')){
    config.headers.Auth=JSON.parse(sessionStorage.getItem('token')).data.token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  if(response.data.code == 401){
   let paths = sessionStorage.getItem('paths')
   if(paths == '/'){
  this.$router.replace("/"); 
  sessionStorage.removeItem("token");
   }else{
  this.$router.replace("/phoneLogin"); 
  sessionStorage.removeItem("token");
}
  }
  if(response.config.url=="/api/login"&&response.data.code==200){
    window.sessionStorage.setItem('token',JSON.stringify(response.data))
  }
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export function login(data){ 
  return axios({
      method:'post',
      url:'/api/login',
      data
    })
}