// 通过 axios 处理请求
const axios = require('axios');

axios.interceptors.response.use(res => {
    if (res.status === 200) {
        return res.data;
    } else {
        reject();
    }
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