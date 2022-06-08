/*
 * @Description: 
 * @Author: Hex575A
 * @Date: 2021-11-13 15:16:09
 * @LastEditTime: 2022-06-08 09:39:43
 * @LastEditors: Please set LastEditors
 * @references: 
 */
import cookie from 'react-cookies'

// 获取当前用户cookie
export const getUser = () => {
  return cookie.load('userinfo')
}

// 用户登录，保存cookie
export const setUser = (user) => {
  let inFifteenMinutes = new Date(new Date().getTime() + 24 * 3600 * 1000 * 30);//30days
  cookie.save('userinfo', user, { path: '/' , expires: inFifteenMinutes })
}

// 用户登出，删除cookie
export const rmUser = () => {
  cookie.remove('userinfo')
}