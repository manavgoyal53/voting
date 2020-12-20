import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './Voter.css';

const voter = (props) => {
    return (
        <Grid item key={props.key} xs={12} sm={6} md={4}>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.roll}
                    </Typography>
                    <Typography>
                        {props.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={props.click} size="small" color="primary">
                        Vote
                </Button>
                </CardActions>
            </Card>
        </Grid>
    )
};

export default voter;