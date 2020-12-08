import React, { Component } from "react";
import { Container, Grid, Card, Button} from 'semantic-ui-react';
import ProjectCard from '../components/ProjectCard/ProjectCard'
import PageCard from '../components/PageCard/PageCard'
import projects from '../projects.json'

export default class Projects extends Component {
    state= {
        projects
    }

    renderDescription = function() {
        return(
            <Grid>
                {this.state.projects.map((project => {
                    return(
                        <Grid.Column mobile={16} tablet={8} computer={8}>
                            <ProjectCard
                            key= {project.id}
                            name= {project.name}
                            description= {project.description}
                            img= {project.img}
                            site= {project.site}
                            github= {project.github}
                            />


                        </Grid.Column>)
                }))}
            </Grid>
        )}
 

    render() {
        return(
            <Container>
                <PageCard
                title="My Projects"
                description={this.renderDescription()}

                
                />
              
           
            </Container>
        )
    }
       
}
