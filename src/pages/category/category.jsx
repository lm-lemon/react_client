import React, { Component } from 'react'
import {
  Card,
  Button,
  Icon,
  Table,
  message,
  Modal
} from 'antd'

import { reqCategorys, reqAddCategory, reqUpdateCategory } from '../../api'
import LinkButton from '../../components/link-button'
import AddUpdateForm from './add-update-from'


/**
 * 分类管理
 */
export default class Category extends Component {

  state = {
    categorys: [],
    loading: false,
    showStatus: 0, //0:不显示 1:显示添加 2:显示修改
  }

  initcolums = () => {
    this.columns = [
      {
        title: '分类的名称',
        dataIndex: 'name',
      },
      {
        title: '操作',
        width: 300,
        render: text => <LinkButton>修改分类</LinkButton>,
      },
    ];
  }

  getCategorys = async () => {
    this.setState({ loading: true })
    const result = await reqCategorys()
    this.setState({ loading: false })
    if (result.status === 0) {
      const categorys = result.data
      this.setState({
        categorys
      })
    } else {
      message.error('获取分类列表失败了')
    }
  }

  handleOk = () => {
   
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      showStatus: 0
    });
  };

  componentWillMount() {
    this.initcolums()
  }

  componentDidMount() {
    this.getCategorys()
  }

  render() {
    //取出状态数据
    const { categorys, loading, showStatus } = this.state

    const extra = (
      <Button type="primary" onClick={() => { this.setState({ showStatus: 1 }) }}>
        <Icon type="plus" />
        添加
      </Button>
    )

    return (
      <Card extra={extra}>
        <Table
          loading={loading}
          rowKey="_id"
          bordered
          columns={this.columns}
          dataSource={categorys}
          pagination={{ defaultPageSize: 5, showQuickJumper: true }}
        />

        <Modal
          title={showStatus === 1 ? "添加分类" : "修改分类"}
          visible={showStatus !== 0}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <AddUpdateForm setForm={form => this.form = form} />
        </Modal>
      </Card>
    )
  }
}
