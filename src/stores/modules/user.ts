import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { login, getUserInfo } from '@/api/sys'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/utils/constant'
// @ts-ignore
import md5 from 'md5'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'

export const useUserStore = defineStore('user', () => {
  const token = ref(getItem(TOKEN))
  const userData = ref({})

  /**
   * 监听token的变化，存储到localStorage
   */
  watch(token, (newState: string, oldState: string) => {
    setItem(TOKEN, newState)
  })

  const loginAction = (username: string, password: string) => {
    return new Promise((resolve, reject) => {
      login({
        username,
        password: md5(password)
      })
        .then((data: any) => {
          token.value = data.token
          //保存登录时间
          setTimeStamp()
          resolve(data)
          // 登录后操作
          router.push('/')
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  const getUserInfoAction = async () => {
    const res = await getUserInfo()
    userData.value = res
    return res
  }

  const logoutAction = () => {
    token.value = ''
    userData.value = {}
    removeAllItem()
    router.push('/login')
  }

  return { token, userData, loginAction, getUserInfoAction, logoutAction }
})
