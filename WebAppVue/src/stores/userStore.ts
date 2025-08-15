import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => ({
    user: '',
    isLogin: false,
  }),
  actions: {
    login(user: string) {
      this.user = user
      this.isLogin = true
    },
    logout() {
      this.user = ''
      this.isLogin = false
    },
  },
})
