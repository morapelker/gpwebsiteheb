import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button/Button";

const styles = {
    label: {
        textTransform: 'capitalize',
        color: '#fff',
    },
    root: {
        marginTop: 10,
    },
};

const MatButton = ({type, onClick, backgroundColor, classes, style, children, disabled}) => {
    return (
        <Button disabled={disabled} variant="contained" color={type} onClick={onClick} style={{
            fontSize: '1em',
            ...style,
            backgroundColor: backgroundColor === 'default' ? '#00aa00' : backgroundColor
        }}
                classes={classes}>
            {children}
        </Button>
    );
};

export default withStyles(styles)(MatButton);