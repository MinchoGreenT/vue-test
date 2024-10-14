// store/index.js
import { createStore } from 'vuex'
import users from './modules/users'

export const store = createStore({
  // named export로 수정
  modules: {
    users,
  },
})
