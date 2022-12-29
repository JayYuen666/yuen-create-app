// 通过 axios 处理请求
const axios = require('axios');
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function getTagList(repo) {
    return axios.get(`https://api.github.com/repos/JayYuen666/${repo}/tags`)
}

module.exports = {
    getTagList
}