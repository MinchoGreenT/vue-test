<template>
  <div>
    <h1>User List</h1>

    <!-- 버튼을 추가하여 유저 목록을 다시 불러오는 기능 -->
    <button @click="fetchUsers">Load Users 1</button>
    <button @click="fetchAnotherUsers">Load Users 2</button>

    <!-- 사용자 목록 표시 -->
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
    <!-- 사용자 데이터가 없을 때 -->
    <p v-else>No users available</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex' // Vuex 헬퍼 함수 임포트

export default {
  computed: {
    // Vuex의 상태를 가져오는 방법 1: mapState 헬퍼 사용
    ...mapState({
      users: state => state.users.users, // 'users' 모듈의 상태 접근
    }),

    // Vuex의 게터를 가져오는 방법 2: mapGetters 헬퍼 사용
    ...mapGetters({
      users: 'allUsers', // users 모듈의 'allUsers' 게터 사용
    }),
  },
  created() {
    // 컴포넌트가 생성될 때, 사용자 데이터를 불러오는 액션 실행
    this.fetchAnotherUsers()
  },
  methods: {
    // 유저 데이터를 다시 불러오는 메소드
    ...mapActions(['fetchUsers', 'fetchAnotherUsers']),
  },
}
</script>
