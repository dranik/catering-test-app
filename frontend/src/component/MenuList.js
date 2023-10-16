import MenuItem from './MenuItem';
import MenuTableHead from './MenuTableHead';
import AddMenu from './AddMenu';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { useEffect } from 'react';
import { fetchMenus, getMenus, getLoading } from '../store/menusSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function MenuList() {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('useEffect');
        dispatch(fetchMenus());
    }, []);

    const rows = useSelector(getMenus);
    const loading = useSelector(getLoading);

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <MenuTableHead/>
                {loading ? <Box><h3>Wait, loading...</h3></Box> : null}
                <TableBody>
                    {rows.map((row) => (
                        <MenuItem key={row.name} row={row} />
                    ))}
                    <AddMenu />
                </TableBody>
            </Table>
        </TableContainer>
    )
}