import { ISmsMessage } from '..'
import * as request from 'request-promise'
export async function send(config: any, message: ISmsMessage) {
  const url = `httsp://sms.ru/sms/send?api_id=${config.token}&json=1&to=${message.to.join(',')}&from=${message.from}&msg=${encodeURIComponent(message.message)}`
  const result = await request(url, { method: 'get' })
  if (result.status == "OK") return true
  return false
}