import request from '@/utils/request'
/**
 * 登录
 */
export const login = (data: any) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

const mock = {
  role: [
    {
      id: '1',
      title: '超级管理员'
    }
  ],
  _id: '612710a0ec87aa543c9c341d',
  id: '0',
  username: 'super-admin',
  title: '超级管理员',
  avatar: 'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png',
  permission: {
    menus: [
      'userManage',
      'roleList',
      'permissionList',
      'articleRanking',
      'articleCreate'
    ],
    points: [
      'distributeRole',
      'importUser',
      'removeUser',
      'distributePermission'
    ]
  }
}

/**
 * 获取用户信息
 * @param data
 */
export const getUserInfo = () => {
  return mock
  // return request({
  //   url: '/sys/profile'
  // })
}
