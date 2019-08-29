import React, { Component } from 'react'
import { Button, message } from 'antd'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

/*
应用根组件
 */
class App extends Component {

  handleClick = () => {
    message.success('成功啦...');
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App