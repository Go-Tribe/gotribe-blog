import { defineStore } from 'pinia'
import { getProjectDetail } from '~/service/project'

export const useProjectStore = defineStore('project', {
  state: () => ({ 
    projectInfo: {}
  }),
  actions: {
    async getProjectInfo() {
      this.projectInfo = await getProjectDetail(import.meta.env.VITE_SITE_NAME)
    }
  }
})