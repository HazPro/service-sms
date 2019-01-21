export interface ISmsMessage {
  provider: string,
  to: Array<string>,
  from: string,
  message: string
}
export interface ISmsProviderConfig {
  name: string,
  providerName: string,
  username: string,
  password: string,
  token: string
}

import { send } from './operators/sms.ru'

export class SmsFabric {
  static async sendMessage(provider: ISmsProviderConfig, message: ISmsMessage) {
    switch (provider.providerName) {
      case 'sms.ru': {
        await send(provider, message)
      }
    }
  }
}