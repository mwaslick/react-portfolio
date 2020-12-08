import React, { Component } from "react";
import projects from '../projects.json'
import { Container, Button, Icon} from 'semantic-ui-react';
import PageCard from '../components/PageCard/PageCard'

export default class Projects extends Component {
     renderDescription = function() {
         return(
             <Container>
               proj
             </Container>
         )

    }
 

    render() {
        return(
            <Container>
                <PageCard
                title="What I've Made"
                description= {this.renderDescription()}
                />
              
           
            </Container>
        )
    }
       
}
