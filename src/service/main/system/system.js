import request from '../../request'

const getPageListData = (url, data) => {
  return request({
    url,
    method: 'post',
    data
  })
}

// 菜单管理
const getMenuList = (url) => {
  return request({
    url,
    method: 'post'
  })
}

// 删除数据
const deletePageData = (url) => {
  return request({
    url,
    method: 'delete'
  })
}

// 创建数据
const createUserData = (url, data) => {
  return request({
    url,
    method: 'post',
    data
  })
}

// 编辑数据
const editUserData = (url, data) => {
  return request({
    url,
    method: 'patch',
    data
  })
}

export {
  getPageListData,
  getMenuList,
  deletePageData,
  createUserData,
  editUserData
}
