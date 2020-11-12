import React from "react";
import Container from '@material-ui/core/Container';
import Project from '../components/Project/Project'
import PageCard from '../components/PageCard/PageCard';
import Typography from '@material-ui/core/Typography';

function Index() {

    return(
        <Container>
            <PageCard
            title="My Projects"

            body= {<Project />}

            



            />

        
            
        </Container>
    )
}

export default Index;