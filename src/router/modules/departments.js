import Layout from '@/layout'

export default {
  path: '/departments',
  component: Layout,
  name: 'departments',
  children: [{
    name: 'departments',
    path: '',
    component: () => import('@/views/departments'),
    meta: {
      title: '组织架构',
      icon: 'tree'
    }
  }]
}
