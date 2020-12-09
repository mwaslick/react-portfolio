import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {Header} from 'semantic-ui-react'
import '../Navigation/Navigation.css'

export default class MenuExampleTabular extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className= 'topbar'>
        <Header as="h1" textAlign='center'>
          <Header.Content>
            <span className='title'>
            Maria Waslick

            </span>
          <Header.Subheader className= 'subtitle'>Full-Stack Web Developer</Header.Subheader>
      </Header.Content>
     
        
      <Menu pointing secondary className="nav">
        <Menu.Item
        className= 'navLink'
          as = {Link}
          to= '/'
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
        className= 'navLink'
          as= {Link}
          to = '/projects'
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        />

    <Menu.Item
    className= 'navLink'
          as= {Link}
          to = '/contact'
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        />

      <Menu.Item
          className= 'navLink'
          href= 'https://drive.google.com/file/d/1eYiXC8jalT2EyRYwq2bApsLdrFnxKy_P/view?usp=sharing'
          target= 'blank'
          name='resume'
          >
            Resume
          </Menu.Item>

  
      </Menu>
      </Header>
      </div>

    )
  }
}
