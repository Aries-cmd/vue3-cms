import request from '../request'

// 登录
const login = (data) => {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

// 获取用户信息
const getUserInfo = (id) => {
  return request({
    url: '/users/' + id,
    method: 'GET'
  })
}

// 获取用户菜单
const getMenuList = (id) => {
  return request({
    url: '/role/' + id + '/menu',
    method: 'GET',
    showLoading: false
  })
}

export { login, getUserInfo, getMenuList }
