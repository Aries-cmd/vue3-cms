export const treeText = `
│  .browserslistrc
│  .editorconfig
│  .eslintrc.js
│  .gitignore
│  .prettierignore
│  .prettierrc
│  babel.config.js
│  package-lock.json
│  package.json
│  README.md
│  test.js
│  vue.config.js
│
├─public
│      favicon.ico
│      index.html
│
└─src
    │  App.vue
    │  main.js
    │
    ├─assets
    │  │  logo.png
    │  │
    │  ├─css
    │  │      base.less
    │  │      index.less
    │  │
    │  └─img
    │          expand.svg
    │          fold.svg
    │          login-bg.svg
    │          logo.svg
    │
    ├─components
    │  ├─card
    │  │      card.vue
    │  │
    │  ├─code
    │  │      code.vue
    │  │
    │  ├─dialog
    │  │      dialog-form.vue
    │  │      dialog.vue
    │  │
    │  ├─echarts
    │  │      pie-echarts.vue
    │  │
    │  ├─nav-header
    │  │  │  nav-header.vue
    │  │  │
    │  │  └─cpns
    │  │          breadcrumb.vue
    │  │          drop-down.vue
    │  │          full-screen.vue
    │  │          hamburger.vue
    │  │
    │  ├─nav-menu
    │  │      config.js
    │  │      nav-menu.vue
    │  │
    │  ├─page-form
    │  │      page-from.vue
    │  │
    │  ├─page-table
    │  │      page-table.vue
    │  │
    │  └─table-header
    │          table-header.vue
    │
    ├─global
    │      message-api.vue
    │
    ├─router
    │  │  index.js
    │  │
    │  └─main
    │      ├─analysis
    │      │  ├─dashboard
    │      │  │      dashboard.js
    │      │  │
    │      │  └─overview
    │      │          overview.js
    │      │
    │      ├─product
    │      │  ├─category
    │      │  │      category.js
    │      │  │
    │      │  └─goods
    │      │          goods.js
    │      │
    │      ├─story
    │      │  ├─chat
    │      │  │      chat.js
    │      │  │
    │      │  └─list
    │      │          list.js
    │      │
    │      └─system
    │          ├─department
    │          │      department.js
    │          │
    │          ├─menu
    │          │      menu.js
    │          │
    │          ├─role
    │          │      role.js
    │          │
    │          └─user
    │                  user.js
    │
    ├─service
    │  │  config.js
    │  │  request.js
    │  │
    │  ├─login
    │  │      login.js
    │  │
    │  └─main
    │      └─system
    │              system.js
    │
    ├─store
    │  │  index.js
    │  │
    │  └─modules
    │      │  header.js
    │      │  nav-menu.js
    │      │
    │      ├─login
    │      │      login.js
    │      │
    │      └─main
    │              product.js
    │              system.js
    │
    ├─utils
    │      eventbus.js
    │      format.js
    │      map-menus.js
    │      page-table.js
    │
    └─views
        ├─login
        │  │  login.vue
        │  │
        │  └─cpns
        │          login-account.vue
        │          login-panel.vue
        │
        └─main
            │  main.vue
            │
            ├─analysis
            │  ├─dashboard
            │  │      card-config.js
            │  │      dashboard.vue
            │  │
            │  └─overview
            │          overview.vue
            │          tree-text.js
            │          tree-text.txt
            │
            ├─product
            │  ├─category
            │  │      category.vue
            │  │
            │  └─goods
            │          goods.vue
            │
            ├─story
            │  ├─chat
            │  │      chat.vue
            │  │
            │  └─list
            │          list.vue
            │
            └─system
                ├─department
                │      department.vue
                │
                ├─menu
                │      menu.vue
                │
                ├─role
                │      role-form.js
                │      role.vue
                │
                └─user
                        user-dialog-form.js
                        user-form.js
                        user-methods.js
                        user-table.js
                        user.vue
`
