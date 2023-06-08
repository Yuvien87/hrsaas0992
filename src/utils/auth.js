import Cookies from 'js-cookie'

const KEY = 'hrsaas-ihrm-token'

export function getToken() {
  return Cookies.get(KEY)
}

export function setToken(token) {
  return Cookies.set(KEY, token)
}

export function delToken() {
  return Cookies.remove(KEY)
}

const timeKey = 'hrsaas-timestamp-key'

export function setTimeStamp() {
  // 设置当前最新的时间戳
  // Date.now()  new Date.getTime()
  Cookies.set(timeKey, Date.now())
}

export function getTimeStamp() {
  return Cookies.get(timeKey)
}
