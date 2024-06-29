import http from "~/utils/request"

// 获取标签详情
export const getTagDetail = async (charID) => {
  return await http({
    url: `/v1/tags/${charID}`,
    method: 'get'
  })
}
