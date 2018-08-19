import axios from 'axios'
const baseURL = 'http://027xin.com:8899'
axios.defaults.baseURL = baseURL
//获取轮播图数据
export const getBannerPictures = params =>{
    return axios.get('/api/getlunbo').then(res=>res.data)
}