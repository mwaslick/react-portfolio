import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Project from '../Project/Project'
 
export default function ProjectCarousel(props) {
    const projects = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
 
    return (
        <Carousel>
            {
                projects.map( (project, i) => <Project key={i} project={project} /> )
            }

        </Carousel>
    )
}