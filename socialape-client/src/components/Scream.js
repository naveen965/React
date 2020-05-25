import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = {
    card: {
        display: 'flex'
    }
}

class Scream extends Component {
    render() {
        const {
            classes,
            scream : {
                body,
                createdAt,
                userImage,
                userHandle,
                screamId,
                likeCount,
                commentCount
            }
        } = this.props;
        return (
            <Card>
                <CardMedia image={userImage} title="Profile image"/>
                <CardContent>
                    <Typography variant="h5" component={Link} to={`/users/${userHandle}`}>{userHandle}</Typography>
                    <Typography variant="body1">{body}</Typography>
                    <Typography variant="body2" color="textSecondary">{createdAt}</Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(Scream);
