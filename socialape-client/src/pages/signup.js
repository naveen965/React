import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Appicon from '../images/User.png';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userAction';

const styles = {
    form: {
        textAlign: 'center',
    },
    image: {
        margin: '20px auto 20px auto'
    },
    pageTitle: {
        margin: '10px auto 10px auto'
    },
    button: {
        width: '100%',
        marginTop: 20,
        position: 'relative'
    },
    TextField: {
        margin: '10px auto 10px auto'
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10
    },
    progress: {
        position: 'absolute'
    },
    smll: {
        marginTop: 20,
    }
}

class signup extends Component {
    constructor () {
        super();
        this.state = {
            email: '',
            password: '',
            confiremPassword: '',
            handle: '',
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({ errors: nextProps.UI.errors });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            confiremPassword: this.state.confiremPassword,
            handle: this.state.handle
        };
        this.props.signupUser(newUserData, this.props.history);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { classes, UI: { loading } } = this.props;
        const { errors } = this.state;
        return (
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <img src={Appicon} alt="user" className={classes.image}/>
                    <Typography variant="h2" className={classes.pageTitle}>
                        Signup
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id="email" name="email" type="email" label="Email"
                            className={classes.TextField}
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            value={this.state.email}
                            onChange={this.handleChange} fullWidth/>
                        <TextField id="password" name="password" type="password" label="Password"
                            className={classes.TextField}
                            helperText={errors.password}
                            error={errors.password ? true : false}
                            value={this.state.password}
                            onChange={this.handleChange} fullWidth/>
                        <TextField id="confiremPassword" name="confiremPassword" type="password" label="Confirm Password"
                            className={classes.TextField}
                            helperText={errors.confiremPassword}
                            error={errors.confiremPassword ? true : false}
                            value={this.state.confiremPassword}
                            onChange={this.handleChange} fullWidth/>
                        <TextField id="handle" name="handle" type="text" label="Handle"
                            className={classes.TextField}
                            helperText={errors.handle}
                            error={errors.handle ? true : false}
                            value={this.state.handle}
                            onChange={this.handleChange} fullWidth/>
                        {errors.general && (
                            <Typography variant="body2" className={classes.customError}>
                                {errors.general}
                            </Typography>
                        )}
                        <Button type="submit" variant="contained" color="primary"
                            className={classes.button}
                            disabled={loading}
                        >
                                Signup
                                {loading && (
                                    <CircularProgress size={30} className={classes.progress}/>
                                )}
                            </Button>
                        <br/>
                        <div  className={classes.smll}>
                            <small>Already have an account ? <Link to="/login">login here</Link></small>
                        </div>
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

signup.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    signupUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

const mapActionsToProps = {
    signupUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(signup));
