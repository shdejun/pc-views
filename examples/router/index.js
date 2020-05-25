import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/introduce',
      name: 'introduce',
      component: r => require.ensure([], () => r(require('../docs/introduce.md')))
    },
    {
      path: '/start',
      name: 'start',
      component: r => require.ensure([], () => r(require('../docs/start.md')))
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: r => require.ensure([], () => r(require('../docs/dialog.md')))
    },
    {
      path: '/lyTable',
      name: 'lyTable',
      component: r => require.ensure([], () => r(require('../docs/lyTable.md')))
    },
    {
      path: '/popup',
      name: 'popup',
      component: r => require.ensure([], () => r(require('../docs/popup.md')))
    },
    {
      path: '/icon',
      name: 'icon',
      component: ()=>import('../docs/icon.md')
      // component: r => require.ensure([], () => r(require('../docs/icon.md')))
    },
    {
      path: '/button',
      name: 'button',
      component: ()=>import('../docs/button.md')
    },
    {
      path:'/editor',
      name:'editor',
      component:() => import('../docs/richText.md')
    },
    {
      path:'/mask',
      name:'mask',
      component:() => import('../docs/mask.md')
    },
    {
      path:'/sideBar',
      name:'sideBar',
      component:() => import('../docs/sideBar.md')
    }
  ]
})
