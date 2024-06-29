import http from "~/utils/request"

// 获取内容列表
export const getContentList = async (params) => {
  return await http({
    url: '/v1/posts',
    method: 'get',
    params
  })
}

// 获取内容详情
export const getContentDetail = async (charID) => {
  return await http({
    url: `/v1/posts/${charID}`,
    method: 'get'
  })
}
