import React, { Component } from "react";
import { Container, Button, Icon} from 'semantic-ui-react';
import PageCard from '../components/PageCard/PageCard'

export default class Index extends Component {
     renderDescription = function() {
         return(
             <Container>
                 <p>I am a Full-Stack Web Developer with a background in Psychology, Graphic Design, and Data Analysis.</p>
                 <p>Technologies I utilize include JavaScript, HTML, CSS, jQuery, Node.js, React.js, MongoDB, MySQL, GitHub, Express.js, Handlebars.js, Heroku, Microsoft Office, and Adobe Creative Suite. </p>
                 <p>I'm a recent graduate of University of Washington's Coding Bootcamp, and a graduate of Vassar College's Class of 2017 with a B.A. in Psychology. </p>
                 <p>Ready to combine my technical and creative skills and create mobile-first applications with streamlined UI and effective performance. </p>

                 <Button.Group>
                     <Button basic href='https://github.com/mwaslick' target='blank' color='black'>
                        <Icon name='github'></Icon> GitHub
                     </Button>

                     <Button basic href='https://www.linkedin.com/in/maria-waslick-8683aa142/' color='black' target='blank'>
                        <Icon name= 'linkedin'></Icon> LinkedIn
                     </Button>

                     <Button basic href='https://drive.google.com/file/d/1eYiXC8jalT2EyRYwq2bApsLdrFnxKy_P/view?usp=sharing' color='black' target='blank'>
                        <Icon name = 'file alternate outline'></Icon>Resume
                     </Button>
                 </Button.Group>
             </Container>
         )

    }

    render() {
        return(
            <Container>
                <PageCard
                title="Who I Am"
                description= {this.renderDescription()}
                />
              
           
            </Container>
        )
    }
       
}

