import { ss } from '@/utils/storage'

const LOCAL_NAME = 'APIType'

export type APIType = 'chat-process' | 'atApi' | 'free1' | 'free2' | 'free3'


export interface APITypeState {
  apiType: APIType
  apiTypeOptions:{
    label: string;
    key: APIType;
    value: APIType
  }[]
}

export function defaultSetting(): APITypeState {
  return { 
    apiType: 'chat-process', 
    apiTypeOptions: [
      {
        label: '私人',
        key: 'chat-process',
        value: 'chat-process'
      },
      {
        label: 'AT官网',
        key: 'atApi',
        value: 'atApi'
      },
      {
        label: 'Free 1',
        key: 'free1',
        value: 'free1'
      },
      {
        label: 'Free 2',
        key: 'free2',
        value: 'free2'
      },
      {
        label: 'Free 3',
        key: 'free3',
        value: 'free3'
      },
    ]
  }
}

export function getLocalSetting(): APITypeState {
  const localSetting: APITypeState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalSetting(setting: APITypeState): void {
  ss.set(LOCAL_NAME, setting)
}
