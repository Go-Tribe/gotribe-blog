import { useProjectStore } from '~/store/project'

const http = obj => {
  const { projectInfo } = useProjectStore()
  return new Promise((resolve, reject) => {
    useFetch(
      `${obj.baseURL ?? import.meta.env.VITE_API_URL}${obj.url}`,
      {
        method: obj.method ?? "GET",
        params: obj?.params ?? null,
        body: obj?.body ?? null,
        onRequest({ request, options }) {
          options.headers = {
            ...options.headers,
            'X-Project-ID': projectInfo.projectID
          }
        },
        onRequestError({ request, options, error }) {
          reject(error)
        },
        onResponse({ request, response, options }) {
          resolve(response._data)
        },
        onResponseError({ request, response, options }) {}
      }
    )
  })
}

export default http