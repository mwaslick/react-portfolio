import React from 'react';
import { Card, Image, Button} from 'semantic-ui-react';

export default function ProjectCard(props) {
    return (
    <Card fluid>
        <Image src= {props.img} wrapped ui='false'>
        </Image>
        <Card.Content>
             <Card.Header>
                {props.name}
             </Card.Header>

             <Card.Description>
                 {props.description}
             </Card.Description>
        </Card.Content>

        <Card.Content extra>
            <Button secondary href={props.site} target='blank'>
                Deployed Site
            </Button>

            <Button secondary href= {props.github} target='blank'>
                GitHub Repository
            </Button>
    </Card.Content>
    </Card>
    )
}
