/*
包含n个接口请求函数的模块
每个函数返回promise
 */
import ajax from './ajax'

// const BASE = 'http://locahost:5000'
const BASE = ''

// 登陆
export function reqLogin(username, password) {
  ajax({
    method: 'post',
    url: BASE + '/login',
    data: {
      username,
      password
    }
  })
}

const name = 'admin'
const pwd = 'admin'
reqLogin(name, pwd)