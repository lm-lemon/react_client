import React, { Component } from 'react'

import {
  Form,
  Input
} from 'antd'

const Item = Form.Item

// 添加分类的form组件
class AddUpdateForm extends Component {

  static propTypes = {
    // setForm: this.propTypes.func.isRequired
  }

  componentWillMount() {
    this.props.setForm(this.props.form)
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form>
        <Item>
          {
            getFieldDecorator('categoryName', {
              initiaValue: '',
              rules: [
                { required: true, message: '分类名称必须输入' }
              ],
            })(
              <Input type="text" placeholder="请输入分类名称" />
            )
          }


        </Item>
      </Form>
    )
  }
}

export default Form.create()(AddUpdateForm)
