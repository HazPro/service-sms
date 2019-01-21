import * as router from 'koa-router'
import * as Koa from 'koa'
import DB from '../../db'
import * as _ from 'lodash'
import { ISmsMessage, SmsFabric } from '../../sms'


export async function sendSms(
  ctx: Koa.ParameterizedContext<{}, router.IRouterContext> | any,
  next: () => Promise<any>
) {
  const db: DB = _.get(ctx, 'db')
  const body: ISmsMessage = _.get(ctx, 'request.body')
  if (!db.isConnected()) {
    await db.connect()
  }
  const provider = await db.getDb().collection('sms-provider').findOne({ name: body.provider })
  SmsFabric.sendMessage(provider, body)
}
