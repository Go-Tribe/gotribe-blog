import http from "~/utils/request"

// 获取分类详情
export const getCategoryDetail = async (charID) => {
  return await http({
    url: `/v1/categorys/${charID}`,
    method: 'get'
  })
}
