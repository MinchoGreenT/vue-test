// api/userService.js
import axios from 'axios'

const API_URL = 'http://localhost:8080/user' // 로컬 서버의 유저 목록 API 엔드포인트

export default {
  // 유저 목록을 가져오는 API 요청
  async fetchUsers() {
    try {
      const response = await axios.get(API_URL + '/list') // API 호출
      return response.data // 서버로부터 받은 데이터를 반환
    } catch (error) {
      console.error('Error fetching users:', error)
      throw error // 에러가 발생하면 호출한 곳으로 에러를 던짐
    }
  },
  // 다른 유저 목록을 가져오는 API 요청
  async fetchAnotherUsers() {
    try {
      const response = await axios.get(API_URL + '/another-list') // API 호출
      return response.data // 서버로부터 받은 데이터를 반환
    } catch (error) {
      console.error('Error fetching users:', error)
      throw error // 에러가 발생하면 호출한 곳으로 에러를 던짐
    }
  },
}
