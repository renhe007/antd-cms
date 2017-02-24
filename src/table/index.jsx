import React from "react";
import {render} from "react-dom";
import {Route,Router,browserHistory,IndexRoute,Link} from "react-router"
import { Input,DatePicker,Select,Button,Table,Icon } from 'antd'
const Option = Select.Option;
import Promise from 'promise-polyfill';
import apiUrl from "../config.js"

export default class TablePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: "",
      dataStart: null,
      dataEnd: null,
      mobile: "",
      type: "",
      'list': []
    }
  }

  componentDidMount(){
    this.load(1)
  }

  load(page){
    fetch(apiUrl+"/table").then(response => response.json())
      .then(json => {
        console.log(Array.isArray(json))
        this.state.list = json
        this.setState(this.state)
      })
      .catch(e => console.log("Oops, error", e))
  }

  onChange(typ,date, dateString){
    let obj = {};
    obj[typ] = date._d;
     this.setState(obj);
  }

  inputOnChange(type,e){
    this.state[type] = e.target.value
    this.setState(this.state)
  }

  handleChange(value){
    this.setState({
      type:value
    })
  }

  render(){
    console.log(this.state)
    console.log(this.state.name)
    const columns = [{
      title: '用户',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '创建时间',
      dataIndex: 'data',
      key: 'data',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="#">Action 一 {record.name}</a>
          <span className="ant-divider" />
          <a href="#" className="ant-dropdown-link">
            More actions <Icon type="down" />
          </a>
        </span>
      ),
    }];

    const data = this.state.list

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };


    return (
      <div >
        <ul className='table-select'>
          <li><label>添加时间</label><DatePicker onChange={this.onChange.bind(this,"dataStart")} /> </li>
          <li><label>结束时间</label><DatePicker onChange={this.onChange.bind(this,"dataEnd")} /> </li>
          <li><label>用户名</label><span><Input onChange={this.inputOnChange.bind(this,"name")} /></span> </li>
          <li><label>手机号</label><span><Input onChange={this.inputOnChange.bind(this,"mobile")} /></span> </li>
          <li>
            <label>类型</label>
            <Select defaultValue={this.state.type} style={{ width: 140 }} onChange={this.handleChange.bind(this)}>
              <Option value="">all</Option>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>Disabled</Option>
              <Option value="yiminghe">Yiminghe</Option>
            </Select>
          </li>
          <li style={{float:"right"}}>
            <Button type="primary" onClick={()=>{
                this.load(1)
              }}>搜索</Button>
          </li>
        </ul>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    )
  }
}
