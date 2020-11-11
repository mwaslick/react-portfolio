import React from "react";
import Container from '@material-ui/core/Container';
import ProjectCarousel from '../components/ProjectCarousel/ProjectCarousel'
import PageCard from '../components/PageCard/PageCard';
import Typography from '@material-ui/core/Typography';

function Index() {

    return(
        <Container>
            <PageCard
            title="My Projects"

            body= {<ProjectCarousel />}

            



            />

        
            
        </Container>
    )
}

export default Index;