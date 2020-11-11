import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export default function Project(props) {
    return (
        <Paper>
            <h2>{props.project.name}</h2>
            <p>{props.project.description}</p>
 
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}