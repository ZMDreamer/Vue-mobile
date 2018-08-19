import axios from 'axios'
const baseURL = 'http://027xin.com:8899'
axios.defaults.baseURL = baseURL
// 获取轮播图数据
export const getBannerPictures = params =>{
    return axios.get('/api/getlunbo').then(res=>res.data)
}
// 获取新闻列表页数据
export const getNewList = params => {
    return axios.get('/api/getnewslist').then(res=>res.data)
}