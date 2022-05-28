export const userRefModel = {
  id: null,
  name: null,
  realname: null,
  cellphone: null,
  enable: null,
  createAt: null
}

export const userFormConfig = [
  {
    label: 'id',
    field: 'id',
    placeholder: '请输入id',
    type: 'input',
    inputType: 'text'
  },
  {
    label: '姓名',
    field: 'name',
    placeholder: '请输入姓名',
    type: 'input',
    inputType: 'text'
  },
  {
    label: '真实姓名',
    placeholder: '请输入真实姓名',
    field: 'realname',
    type: 'input',
    inputType: 'text'
  },
  {
    label: '手机号',
    placeholder: '请输入手机号',
    field: 'cellphone',
    type: 'input',
    inputType: 'text'
  },
  {
    field: 'enable',
    type: 'select',
    label: '选择状态',
    placeholder: '请选择状态',
    options: [
      {
        label: '启用',
        value: 1
      },
      {
        label: '禁用',
        value: 0
      }
    ]
  },
  {
    label: '选择日期',
    type: 'picker',
    pickerType: 'daterange',
    field: 'createAt'
  }
]
