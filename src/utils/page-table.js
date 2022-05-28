import { NButton, NIcon } from 'naive-ui'
import { Edit, Delete } from '@vicons/carbon'
import { h } from 'vue'
import emitter from './eventbus.js'

const icons = [Edit, Delete]

export const initTableButton = (row) => {
  const actions = row.actions.map((item, index) => {
    return h(
      NButton,
      {
        style: {
          marginRight: '6px'
        },
        type: item.type,
        onClick: () => {
          switch (item.text) {
            case '删除':
              emitter.emit('handleDelectClick', row)
              break
            case '编辑':
              emitter.emit('editShowDialog', row)
              break
          }
        }
      },
      [h(NIcon, null, { default: () => h(icons[index]) }), item.text]
    )
  })
  return actions
}
