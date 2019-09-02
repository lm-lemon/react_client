import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';

import logo from '../../assets/images/logo.png'
import menuList from '../../config/menuConfig'
import './index.less'

const { SubMenu } = Menu;

export default class LeftNav extends Component {

  getMenuNodes = (menuList) => {
    return menuList.map(item => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      }
      return (
        <SubMenu
          key={item.key}
          title={
            <span>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </span>
          }
        >
          {
            this.getMenuNodes(item.children)
          }
        </SubMenu>
      )
    })
  }

  render() {
    return (
      <div className="left-nav">
        <Link className="left-nav-link" to="/home">
          <img src={logo} alt="logo" />
          <h1>硅谷后台</h1>
        </Link>
        <Menu
          defaultSelectedKeys={['/home']}
          theme="dark"
          mode="inline"
        >
          {
            this.getMenuNodes(menuList)
          }

        </Menu>

      </div>
    )
  }
}
