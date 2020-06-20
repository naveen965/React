import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NoImg from '../images/icon.png';
import withStyles from '@material-ui/core/styles/withStyles';
import {
    Card,
    CardMedia,
    CardContent
} from '@material-ui/core';

const styles = ({
    card: {
        display: 'flex',
        marginBottom: 20
    }
})

const ScreamSkeleton = (props) => {
    const { classes } = this.props;
    const content = Array.from({ length: 5 }).map((item, index) => (
        <Card className={classes.card} key={index}>
            <CardMedia className={classes.cover} image={NoImg}/>
            <CardContent className={classes.cardContent}>
                <div className={classes.handle}/>
                <div className={classes.date}/>
                <div className={classes.fullLine}/>
                <div className={classes.fullLine}/>
                <div className={classes.halfLine}/>
            </CardContent>
        </Card>
    ));
    return (
        <Fragment>{content}</Fragment>
    )
}

ScreamSkeleton.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ScreamSkeleton);