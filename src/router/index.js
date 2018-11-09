import Vue from 'vue'
import Router from 'vue-router'
import UploadFile from '../components/upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/upload',
      component: UploadFile
    }
  ]
})
