import { ss } from '@/utils/storage'

const LOCAL_NAME = 'promptStore'

import ChengzzChatGPTPrompt from '../../../../public/ChengzzChatGPTPrompt.json'

export type PromptList = []

export interface PromptStore {
  promptList: PromptList
}

export function defaultSetting(): PromptStore {
  //数据处理
  let jsonData = ChengzzChatGPTPrompt
    if ('act' in jsonData[0] && 'prompt' in jsonData[0]) {
      jsonData = jsonData.map((item: { act: string; prompt: string }) => {
        return {
          key: item.act,
          value: item.prompt,
        }
      }) as PromptList
    }
  return { 
    promptList: jsonData as PromptList
  }
}

export function getLocalPromptList(): PromptStore {
  const promptStore: PromptStore | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...promptStore }
}

export function setLocalPromptList(promptStore: PromptStore): void {
  ss.set(LOCAL_NAME, promptStore)
}
