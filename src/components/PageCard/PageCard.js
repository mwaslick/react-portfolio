import React from 'react';
import { Card, Divider} from 'semantic-ui-react';
import '../PageCard/PageCard.css';

function PageCard(props) {
    return (
        <Card fluid className="pagecard">
        <Card.Content>
            <Card.Header className='cardtitle'>
                {props.title}
            </Card.Header>
            <Divider />

            <Card.Description>
                {props.description}
            </Card.Description>
        </Card.Content>
    </Card>



    )
    
}
  
  export default PageCard;