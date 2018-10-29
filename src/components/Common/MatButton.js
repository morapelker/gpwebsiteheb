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
        marginLeft: 40
    },
};

const MatButton = ({type, onClick, backgroundColor, text, classes, style}) => {
    return (
        <Button variant="contained" color={type} onClick={onClick} style={{...style, backgroundColor : backgroundColor === 'default' ? '#33cc33' : backgroundColor}}
                classes={classes}>
            {text}
        </Button>
    );
};

export default withStyles(styles)(MatButton);