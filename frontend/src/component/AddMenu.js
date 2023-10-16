import * as React from 'react';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';

import { createMenu, fetchMenus, getLoading } from '../store/menusSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export default function AddMenu(props) {
    const dispatch = useDispatch();
    const loading = useSelector(getLoading);

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    const resetForm = () => {
        setName('');
        setPrice(0);
        setDescription('');
    }

    return (
        <React.Fragment>
            <TableRow >
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <h3>Add a menu</h3>
                </TableCell>
            </TableRow>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell />
                <TableCell component="th" scope="row">
                    <TextField 
                        value={name} 
                        onChange = {e => setName(e.target.value)}
                        id="standard-basic"
                        label="Name"
                        variant="standard" 
                        disabled={loading}/>
                </TableCell>
                <TableCell align="right">
                    <TextField
                        value={price} 
                        onChange = {e => setPrice(e.target.value)}
                        id="standard-basic" 
                        label="Price" 
                        variant="standard" 
                        type="number" 
                        disabled={loading}/>  
                </TableCell>
                <TableCell align="right">
                    <Button  
                        disabled={loading}
                        color="success" 
                        onClick={ async () => {
                            await dispatch(createMenu(name, price, description));
                            resetForm();
                            await dispatch(fetchMenus());
                        }}
                    >
                        Add
                    </Button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell />
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}> 
                    <TextField 
                        value={description} 
                        onChange = {e => setDescription(e.target.value)}
                        id="standard-basic"
                        label="Description"
                        variant="standard"
                        disabled={loading}/>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

