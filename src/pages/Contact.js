import React, { Component } from "react";
import { Container, Icon, List} from 'semantic-ui-react';
import PageCard from '../components/PageCard/PageCard'

export default class Contact extends Component {
     renderDescription = function() {
         return(
            <List animated verticalAlign='middle' size='large'>
            <List.Item>
              <Icon name='phone' />
              <List.Content>
                <List.Header>(413) 519-1642</List.Header>
              </List.Content>
            </List.Item>

            <List.Item>
              <Icon name='mail' />
              <List.Content>
                <List.Header href='mailto:mariawaslick@gmail.com' target='blank'>
                    mariawaslick@gmail.com
                </List.Header>
              </List.Content>
            </List.Item>
          </List>
        )

    }

    render() {
        return(
            <Container>
                <PageCard
                title="Contact Me"
                description= {this.renderDescription()}
                />
              
           
            </Container>
        )
    }
       
}
