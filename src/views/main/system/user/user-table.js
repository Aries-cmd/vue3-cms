import { initTableButton } from '@/utils/page-table.js'

export const userTableTheadValues = [
  {
    type: 'selection'
  },

  {
    title: '序号',
    key: 'sort'
  },
  {
    title: '用户名',
    key: 'name'
  },
  {
    title: '真实姓名',
    key: 'realname'
  },
  {
    title: '手机号码',
    key: 'cellphone'
  },
  {
    title: '状态',
    key: 'enable'
  },
  {
    title: '创建时间',
    key: 'createAt'
  },
  {
    title: '更新时间',
    key: 'updateAt'
  },
  {
    title: '操作',
    key: 'actions',
    render(row) {
      const actions = initTableButton(row)
      return actions
    }
  }
]
