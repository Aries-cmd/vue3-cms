import request from '../../request'

const getPageListData = (url, data) => {
  return request({
    url,
    method: 'post',
    data
  })
}

const getMenuList = (url) => {
  return request({
    url,
    method: 'post'
  })
}

export { getPageListData, getMenuList }
