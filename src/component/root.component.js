/*
 * @Author: Hexar wangzhao000130@163.com
 * @Date: 2022-05-28 09:21:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-08 09:53:46
 * @FilePath: \reactdev\xmgl\src\Component\root.component.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import asyncComponent from './aysncComponent'
//合理使用异步路由与路由 获得更好的用户体验
//局部刷新
//import Vision from './Backstage/Plan/Visiton'
//主页面路由地址 使用异步路由
const Home = asyncComponent(() => import('./Page/Home/index'))

// 后台页面路由地址

class RootComponent extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            {/* 从上往下添加 否则Home会遍历 */}
            {/* 后台页面路由 */}

            {/* 主页面路由 */}
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default RootComponent