import http from "~/utils/request"

// 获取专栏列表
export const getColumnList = async (params) => {
  return await http({
    url: '/v1/columns',
    method: 'get',
    params
  })
}

// 获取专栏详情
export const getColumnDetail = async (charID) => {
  return await http({
    url: `/v1/columns/${charID}`,
    method: 'get'
  })
}
