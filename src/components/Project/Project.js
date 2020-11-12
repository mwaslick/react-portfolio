import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Project(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
              <Typography variant="h3" component="h4">
                  {props.name}
              </Typography>
              
              <img src={props.img} alt={props.name} className="projectImg">
                </img>

              <Typography variant ="body1">
                {props.description}
              </Typography>

              <Button variant="contained" color="secondary" href={props.site}>
              Website
                </Button>

              <Button variant="contained" color="secondary" href= {props.github}>
              GitHub Repository
                  </Button>


          </Paper>
        </Grid>
    )
       
}