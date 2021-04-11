import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Stores from './Stores';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export default function Home() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Container maxWidth='lg' className={classes.container}>
      <Grid container spacing={3}>
        {/* Chart */}
        {/* <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid> */}
        {/* Recent Stores */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Stores />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        {/* Recent Stores */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Stores />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        {/* Recent Stores */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Stores />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        {/* Recent Stores */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Stores />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        {/* Recent Stores */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Stores />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        {/* Recent Stores */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Stores />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        {/* Recent Stores */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Stores />
          </Paper>
        </Grid>
        {/* Recent Orders */}

        {/* Recent Stores */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Stores />
          </Paper>
        </Grid>
        {/* Recent Orders */}
      </Grid>
      <Box pt={4}>
        <Copyright />
      </Box>
    </Container>
  );
}
