import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import Project from '../components/Project/Project'
import PageCard from '../components/PageCard/PageCard';
import projects from '../projects.json'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import eatdaburger from '../images/eatdaburger.png'

class Projects extends Component {
    state = {
        projects
    };

    render() {
        return(
            <Container>
                <PageCard>
                <Typography variant="h2">
                   My Projects
                </Typography>

                    <Grid container spacing={2}>
    
                {this.state.projects.map(project => (
                    <Project
                    id= {project.id}
                    name= {project.name}
                    img= {project.img}
                    description= {project.description}
                    site= {project.site}
                    github= {project.github}
                    />
                ))}

                </Grid>

    
                </PageCard>
                
            </Container>
        )

    }
   
}

export default Projects;