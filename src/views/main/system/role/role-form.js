export const modelRef = {
  name: null,
  intro: null,
  createAt: null
}

export const formConfig = [
  {
    field: 'name',
    label: '角色名称',
    type: 'input',
    inputType: 'text',
    placeholder: '请输入角色名称'
  },
  {
    field: 'intro',
    label: '权限介绍',
    type: 'input',
    inputType: 'text',
    placeholder: '请输入权限介绍'
  },
  {
    field: 'createAt',
    label: '创建时间',
    type: 'picker',
    pickerType: 'daterange'
  }
]
