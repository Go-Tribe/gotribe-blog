import http from "~/utils/request"

// 获取分类详情
export const getProjectDetail = async (alias) => {
  return await http({
    url: `/v1/projects/${alias}`,
    method: 'get'
  })
}
