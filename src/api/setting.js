import request from '@/utils/request'

export const getRoleList = params => request({
  url: '/sys/role',
  params
})

export const getCompanyInfo = companyId => request({
  url: `/company/${companyId}`
})

export const deleteRole = id => request({
  url: `/sys/role/${id}`,
  method: 'delete'
})

export const updateRole = data => request({
  url: `/sys/role/${data.id}`,
  data,
  method: 'put'
})

export const getRoleDetail = id => request({
  url: `/sys/role/${id}`
})

export function addRole(data) {
  return request({
    url: '/sys/role',
    data,
    method: 'post'
  })
}

// 给角色分配权限
export function assignPerm(data) {
  return request({
    url: '/sys/role/assignPrem',
    method: 'put',
    data
  })
}
