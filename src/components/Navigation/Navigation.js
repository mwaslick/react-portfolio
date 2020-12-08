import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {Container, Header, Icon} from 'semantic-ui-react'

export default class MenuExampleTabular extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <Header as="h1" className="header">
        <span className="headerName">
        Maria Waslick
        </span>
        
        <Menu pointing secondary className="nav">
        <Menu.Item
          as = {Link}
          to= '/'
          name='index'
          active={activeItem === 'index'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as= {Link}
          to = '/projects'
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        />

    <Menu.Item
          as= {Link}
          to = '/contact'
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        />
      </Menu>
      </Header>

    )
  }
}
