import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import makeFunctional from './UseStyles';

const cards = [1, 2, 3, 4];

class VoterList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showBody: false };
    }
    render() {
        return (
            <Container className={this.props.classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={this.props.classes.card}>
                                <CardMedia
                                    className={this.props.classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={this.props.classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {this.props.roll}
                                    </Typography>
                                    <Typography>
                                        {this.props.name}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Vote
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }
}

export default makeFunctional(VoterList);