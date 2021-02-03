import { React, Component } from 'react';
import './index.less'
import { Menu, Button, Tooltip} from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import userhead from "../../assets/userhead.png";
import shutdown from "../../assets/userhead.png";
import { side } from '../../data/sideBarMenu';
const { SubMenu } = Menu;

export default class Index extends Component{
  state = {
    title: 'GDP核算系统',
    reportDate: '2020',
    isCollapse: true,
  }
  render() {
    const { title, reportDate, isCollapse, } = this.state
    return(
      <div id='index'>
        <div className="header">
          <div className="layout-logo" style={{width:'180px', borderRight:'1px solid #e6e6e6'}}>
            <span style={{paddingLeft:(isCollapse ? '8px' : '30px')}} className="sysTitle">{title}</span>
          </div>
          <div className="header-info">
            <div className="reportDate">
              <span>报告期：{reportDate}</span>
            </div>
            <Tooltip  placement="bottom-end" content="用户名">
              <img src={userhead} height="20" style={{marginTop: '18px'}} />
            </Tooltip>
              <img src={shutdown} height="20" />
          </div>
        </div>
        <div className="menu-content">
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="light"
            style={{width:'180px'}}
            inlineCollapsed={this.state.collapsed}
          >
            {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              Option 3
            </Menu.Item> */}
            {
              side.menu.map(item => {
                return <SubMenu  style={{width:'180px'}} key="sub1" icon={<MailOutlined/>} key={item.menuPermission} title={item.name}>
                  {
                    item.children.map(items => {
                      return <Menu.Item key={items.index}>{items.name}</Menu.Item>
                    })
                  }
              </SubMenu>
              })
            }
          </Menu>
          <div className="content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    )
  }
}
