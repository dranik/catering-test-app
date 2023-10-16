import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import TableSortLabel from '@mui/material/TableSortLabel';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, toggleOrder, fetchMenus, getLoading } from '../store/menusSlice';

export default function MenuTableHead() {
    const dispatch = useDispatch();
    const loading = useSelector(getLoading);
    const query = useSelector(state => state.menus.searchQuery);
    const order = useSelector(state => state.menus.order);

    return (
        <TableHead>
            <TableRow>
                <TableCell />
                <TableCell>
                    <TextField 
                        disabled={loading}
                        label="Search by name" 
                        value={query} 
                        onChange={e => dispatch(setSearchQuery(e.target.value))}/>
                    <Button disabled={loading} onClick={ async () => { 
                        await dispatch(fetchMenus());
                    }}>
                        Search
                    </Button>
                </TableCell>
                <TableCell
                    align="right"
                    sortDirection={order}
                >
                    <TableSortLabel
                        active={true}
                        direction={order}
                        onClick={async () => {
                            dispatch(toggleOrder());
                            dispatch(fetchMenus());
                        }}
                        disabled={loading}
                    >
                        Price
                    </TableSortLabel>
                </TableCell>
                <TableCell />
            </TableRow>
        </TableHead>
    )
}