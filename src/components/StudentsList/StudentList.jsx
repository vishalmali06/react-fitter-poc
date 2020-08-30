import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const StudentList = ({ students }) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [tempState, settempState] = useState({});
    // settempState("two");

    const handleClickOpen = (e) => {
        debugger;
        console.log(e.target.textContent);
        setOpen(true);
        students.forEach(element => {
            if (element.name === e.target.textContent) {
                settempState(element);
            }
        });

    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Individual Student details
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <p>Name : {tempState.name}</p>
                        <p>ID : {tempState.id}</p>
                        <p>Email Address : {tempState.email}</p>
                        <p>Mobile Number : {tempState.mobile}</p>
                        <p>School Name : {tempState.schoolName}</p>
                        <p>Standard : {tempState.standard}</p>
                        <p>Division : {tempState.division}</p>
                        <p>State : {tempState.state}</p>
                        <p>Country : {tempState.country}</p>

                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Close
          </Button>
                </DialogActions>
            </Dialog>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Mobile</TableCell>
                            <TableCell>School Name</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student) => (
                            <TableRow key={student.id}>
                                <TableCell><span style={{ color: "blue", cursor: "pointer" }} onClick={handleClickOpen}>{student.name}</span></TableCell>
                                <TableCell>{student.email}</TableCell>
                                <TableCell>{student.mobile}</TableCell>
                                <TableCell>{student.schoolName}</TableCell>
                                <TableCell>{student.state}</TableCell>
                                <TableCell>{student.country}</TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="primary" style={{ marginRight: "5px" }}>
                                        Edit
                                    </Button>
                                    <Button variant="outlined" color="primary">
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default StudentList;