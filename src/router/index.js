import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Note from '../components/Note'
import NoteList from '../components/NoteList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'login',
      component:Login
    },
    {
      path: '/noteList/:id',
      name: 'noteList',
      component: Note
    },
    {
    	path:'/noteList',
    	name:'noteList',
    	component:NoteList
    }
  ]
})
