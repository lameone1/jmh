import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Main from '@/pages/individual/main'
import Mainson from '@/pages/main/mainson'
import Jobdetail from '@/pages/main/jobdetail'
import Mine from '@/pages/individual/mine'
import About from '@/pages/mine/about'
import Learn from '@/pages/individual/learn'
import Learnson from '@/pages/learn/learnson'
import NotFound from '@/pages/404'


import Joblist from '@/pages/company/joblist'
import Addjob from '@/pages/company/addjob'
import { empower } from '@/utils/getWechatUserInfo.js'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录',
        require:true
      }
    },
    {
      path: '*',
      component: NotFound,
      meta: {
        title: '404'
      }
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: {
        title: '军梦汇'
      }
    },
    {
      path: '/main/mainson',
      name: 'mainson',
      component:Mainson,
      meta: {
        title: '加入军梦汇'
      }
    },
    {
      path: '/main/jobdetail',
      name: 'jobdetail',
      component:Jobdetail,
      meta: {
        title: '职位详情',require:true
      }
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn,
      meta: {
        title: '军才学院'
      }
    },
    {
      path: '/learnson',
      name: 'learnson',
      component: Learnson,
      meta: {
        title: '课程详情',require:true
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      meta: {
        title: '军梦汇',require:true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '关于军梦汇'
      }
    },
    {
      path: '/company/joblist',
      name: 'joblist',
      component: Joblist,
      meta: {
        title: '已发布的招聘'
      }
    },
    {
      path: '/company/addjob',
      name: 'addjob',
      component: Addjob,
      meta: {
        title: '发布招聘信息'
      }
    },
    ]
})


router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
    if (to.meta.require) {
      empower();
      next()
    } else {
      next();
    }
  }

});

export default router
