/*
包含n个接口请求函数的模块
每个函数返回promise
 */
import ajax from './ajax'

// const BASE = 'http://locahost:5000'
const BASE = ''

// 请求登陆
export const reqLogin = (username, password) =>  ajax.post(BASE + '/login', {username, password})

