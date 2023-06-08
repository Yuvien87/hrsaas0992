import request from '@/utils/request'

export function login(data) {
  // 返回一个axios对象 => promise  // 返回了一个promise对象
  return request({
    url: '/sys/login', // 因为所有的接口都要跨域 表示所有的接口要带 /api
    method: 'post',
    data
  })
}

export const getUserInfo = () => request({
  url: '/sys/profile',
  method: 'post'
})

export const getUserDetailById = id => request({
  url: `/sys/user/${id}`
})

export function logout() {

}
