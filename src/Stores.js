import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Store</Title>
      <Typography component='p' variant='h4'>
        10
      </Typography>
      <Typography color='textSecondary' className={classes.depositContext}>
        on 07 April, 2021
      </Typography>
      <div>
        <Link color='primary' href='#' onClick={preventDefault}>
          View More
        </Link>
      </div>
    </React.Fragment>
  );
}
