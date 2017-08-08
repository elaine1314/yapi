import './Subnav.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu } from 'antd';

class Subnav extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    data: PropTypes.array,
    default: PropTypes.string
  }

  render () {
    return (
      <div className="m-subnav">
        <Menu
          onClick={this.handleClick}
          defaultSelectedKeys={[this.props.default]}
          mode="horizontal"
          className="g-row m-subnav-menu"
        >
          {this.props.data.map((item, index) => {
            return (
              <Menu.Item className="item" key={item.name}>
                <Link to={item.path}>{this.props.data[index].name}</Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </div>
    )
  }
}

export default Subnav;