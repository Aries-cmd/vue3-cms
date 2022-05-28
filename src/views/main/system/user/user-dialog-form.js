export const createUserDialogFormConfig = (departmentOptions, roleOptions) => {
  return [
    {
      field: 'name',
      label: '用户名',
      type: 'input',
      inputType: 'text',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      label: '真实姓名',
      type: 'input',
      inputType: 'text',
      placeholder: '请输入真实姓名',
      name: 'realname'
    },
    {
      field: 'password',
      label: '用户密码',
      type: 'input',
      inputType: 'password',
      clearable: true,
      placeholder: '请输入密码'
    },
    {
      field: 'cellphone',
      label: '电话号码',
      type: 'input',
      inputType: 'text',
      placeholder: '请输入电话号码'
    },
    {
      field: 'departmentId',
      label: '选择部门',
      type: 'select',
      placeholder: '请选择部门',
      options: departmentOptions
    },
    {
      field: 'roleId',
      label: '选择角色',
      type: 'select',
      placeholder: '请选择角色',
      options: roleOptions
    }
  ]
}
export const editUserDialogFormConfig = (departmentOptions, roleOptions) => {
  return [
    {
      field: 'name',
      label: '用户名',
      type: 'input',
      inputType: 'text',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      label: '真实姓名',
      type: 'input',
      inputType: 'text',
      placeholder: '请输入真实姓名',
      name: 'realname'
    },
    {
      field: 'cellphone',
      label: '电话号码',
      type: 'input',
      inputType: 'text',
      placeholder: '请输入电话号码'
    },
    {
      field: 'departmentId',
      label: '选择部门',
      type: 'select',
      placeholder: '请选择部门',
      options: departmentOptions
    },
    {
      field: 'roleId',
      label: '选择角色',
      type: 'select',
      placeholder: '请选择角色',
      options: roleOptions
    }
  ]
}

export const createUserDialogFormModel = {
  name: null,
  realname: null,
  password: null,
  cellphone: null,
  departmentId: null,
  roleId: null
}
export const editUserDialogFormModel = (item) => {
  return {
    id: item.key,
    name: item.name,
    realname: item.realname,
    cellphone: item.cellphone,
    departmentId: item.departmentId,
    roleId: item.roleId
  }
}
