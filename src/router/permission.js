import router from './index'
import Cookie from 'js-cookie'

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-undef
  if (Cookie.get(token)) {
    if (to.path === '/login') {
      next({
        path: '/'
      })
    }
    next()
  } else {
    next({
      path: '/login'
    })
  }
})
