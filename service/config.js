import http from "~/utils/request"

// 获取配置详情
export const getConfigDetail = async (charID) => {
  return await http({
    url: `/v1/configs/${charID}`,
    method: 'get'
  })
}
