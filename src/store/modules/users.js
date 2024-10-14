// store/modules/users.js
import userService from '@/api/userService'

const state = {
  users: [],
}

const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
}

const actions = {
  async fetchUsers({ commit }) {
    try {
      const users = await userService.fetchUsers() // userService에서 유저 목록을 가져옴
      commit('SET_USERS', users) // 상태 업데이트
    } catch (error) {
      console.error('Failed to fetch users:', error)
    }
  },
  async fetchAnotherUsers({ commit }) {
    try {
      const users = await userService.fetchAnotherUsers() // userService에서 유저 목록을 가져옴
      commit('SET_USERS', users) // 상태 업데이트
    } catch (error) {
      console.error('Failed to fetch users:', error)
    }
  },
}

const getters = {
  allUsers: state => state.users,
}

export default {
  state,
  mutations,
  actions,
  getters,
}
