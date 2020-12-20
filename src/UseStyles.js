import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    grow: {
        flexGrow: 1,
    },    
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    sectionDesktop: {
        margin: theme.spacing(1),
        minWidth: 120,
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
    },
}));

const makeFunctional = (C) => {
    return (props) => {
        return <C classes={useStyles()} {...props} />;
    };
};

export default makeFunctional;