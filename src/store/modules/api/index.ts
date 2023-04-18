import { defineStore } from 'pinia'
import type { APITypeState, APIType } from './helper'
import { getLocalSetting, setLocalSetting } from './helper'


export const useApiStore = defineStore('api-store', {
    state: (): APITypeState => getLocalSetting(),
    actions: {
      setApiType(apiType: APIType) {
        if (this.apiType !== apiType) {
          this.apiType = apiType
          this.recordState()
        }
      },
      recordState() {
        setLocalSetting(this.$state)
      },
    },
  })