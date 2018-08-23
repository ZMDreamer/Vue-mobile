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
//获取新闻列表详情数据
export const getNewsDetail = params =>{
    return axios.get(`/api/getnew/${params}`).then(res => res.data)
}
//获取新闻列表页评论组件的数据
export const getNewsComments = params =>{
    return axios.get('/api/getcomments/'+params.artid+'?pageindex='+params.pageindex).then(res =>res.data)
}
//上传品论数据
export const submitComment = params =>{
    return axios.post(`/api/postcomment/${params.artid}`, params).then(res => res.data)
}
//获取商品列表信息
export const getGoodLists = params =>{
    return axios.get('/api/getgoods?pageindex='+params).then(res => res.data)
}
//获取商品详情信息
export const getGoodDetail = params => {
    return axios.get(`	
api/goods/getinfo/${params} `).then(res => res.data)
}
//获取商品详情轮播图
export const getGoodDetailBanners = params => {
  return axios.get(`	
api/getthumimages/${params}`).then(res => res.data)
}
//获取图文详情信息
export const getGoodDescribe = params => {
    return axios.get(`/api/goods/getdesc/${params}`).then(res => res.data)
}
//