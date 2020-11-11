import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './style.css'

export default function Footer() {
  return (
      <footer>
        <Container maxWidth="sm">
        <Typography variant="body1">
             {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
            </Typography>
        </Container>
      </footer>
  )
}