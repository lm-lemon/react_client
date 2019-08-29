import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'

import logo from './images/logo.png'
import './login.less'

const Item = Form.Item

class Login extends Component {

  handleSubmit = e => {
    e.preventDefault();
    // const form = this.props.form
    // const values = form.getFieldsValue()
    // const username = form.getFieldValue('username')
    // const password = form.getFieldValue('password')
    // console.log(values, username, password)

    this.props.form.validateFields((err, { username, password }) => {
      if (!err) {
        alert(`发登录的ajax请求, username=${username}, password=${password}`)
      } else {
        alert('验证失败')
      }
    });
  };

  /* 
      对密码进行自定义验证
    */
  validatePwd = (rule, value, callback) => {
    // 1).必须输入
    // 2).必须大于等于4位
    // 3).必须小于等于12位
    // 4).必须是英文、数字或下划线组成
    value = value.trim()
    if (!value) {
      callback('密码必须输入')
    } else if (value.length < 4) {
      callback('密码不能小于4位')
    } else if (value.length > 12) {
      callback('密码不能大于12位')
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback('密码必须是英文、数字或下划线组成')
    } else {
      callback() // 验证通过
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login-header">
          <img src={logo} alt="logo" />
          <h1>后台管理系统</h1>
        </div>
        <div className="login-content">
          <h1>用户登陆</h1>

          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
              {
                getFieldDecorator('username', {
                  initialValue: '', //初始值
                  rules: [
                    // 1).必须输入
                    // 2).必须大于等于4位
                    // 3).必须小于等于12位
                    // 4).必须是英文、数字或下划线组成
                    { required: true, whitespace: true, message: '用户名是必须!' },
                    { min: 4, message: '必须大于4位' },
                    { max: 12, message: '必须小于12位' },
                    { pattern: /^[a-zA-Z0-9_]+$/, message: '必须是英文、数字或下划线组成' }
                  ],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />,
                )}
            </Item>
            <Item>
              {
                getFieldDecorator('password', {
                  initialValue: '', //初始值
                  rules: [
                    { validator: this.validatePwd }
                  ],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappeForm = Form.create()(Login);

export default WrappeForm