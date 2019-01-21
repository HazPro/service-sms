import * as s from './http'
import * as config from './config'
import * as DB from './db'
const db = new DB.default(config.default)
const http = new s.default(null, db, config.default)
http.start()