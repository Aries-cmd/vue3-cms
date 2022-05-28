const getMenuList = (menus, icons, h, renderIcon, RouterLink) => {
  let menuOptions = []
  menus.forEach((item, index) => {
    let menu = {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              path: ''
            }
          },
          { default: () => item.name }
        ),
      key: item.name,
      icon: renderIcon(icons[index])
    }
    if (item.children) {
      menu.children = []
      for (let i of item.children) {
        let menuChildren = {
          type: 'group',
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  path: i.url
                }
              },
              { default: () => i.name }
            ),
          key: i.name
        }
        menu.children.push(menuChildren)
      }
    }
    menuOptions.push(menu)
  })
  return menuOptions
}

export { getMenuList }
